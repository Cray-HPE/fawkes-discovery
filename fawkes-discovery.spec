# MIT License
#
# (C) Copyright 2021-2023 Hewlett Packard Enterprise Development LP
#
# Permission is hereby granted, free of charge, to any person obtaining a
# copy of this software and associated documentation files (the "Software"),
# to deal in the Software without restriction, including without limitation
# the rights to use, copy, modify, merge, publish, distribute, sublicense,
# and/or sell copies of the Software, and to permit persons to whom the
# Software is furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included
# in all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
# THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
# OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
# ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
# OTHER DEALINGS IN THE SOFTWARE.
Name:          %(echo $NAME)
License:       MIT License
Summary:       Application for discovering hardware and bmc info on baremetal nodes.
Version:       %(echo $VERSION)
Release:       1
BuildArch:     %(echo $ARCH)
Source:        %{name}-%{version}.tar.bz2
Vendor:        Cray Inc.
Packager:      Cray Inc.
BuildRequires: coreutils
BuildRequires: sed
BuildRequires: skopeo
BuildRequires: pkgconfig(systemd)
Requires:      podman
Requires:      podman-cni-config

# helps when installing a program whose unit files makes use of a feature only available in a newer systemd version
# If the program is installed on its own, it will have to make do with the available features
# If a newer systemd package is planned to be installed in the same transaction as the program,
# it can be beneficial to have systemd installed first, so that the features have become available by the time program is installed and restarted
%{?systemd_ordering}

%define imagedir %{_sharedstatedir}/cray/container-images/%{name}

%define current_branch %(echo ${GIT_BRANCH} | sed -e 's,/.*$,,')
%define image_frontend_tag %(echo ${IMAGE_VERSION})

%if "%(echo ${IS_STABLE})" == "true"
%define bucket fawkes-docker/stable
%else
%define bucket fawkes-docker/unstable
%endif

# This needs to match what is created for the image
%define image_frontend artifactory.algol60.net/%{bucket}/%{name}:%{image_frontend_tag}
%define image_frontend_tar %{name}-%{image_frontend_tag}.tar
%define image_db_tag 7.0.2
%define image_db docker.io/library/mongo:%{image_db_tag}
%define image_db_tar %{name}-mongodb-%{image_db_tag}.tar
%define bmcbin fawkes-client

%description
An http endpoint for bare metal hardware data.

%prep
env

%setup -q
echo bucket: %{bucket} tag: %{image_frontend_tag} current_branch: %{current_branch}
timeout 15m sh -c 'until skopeo inspect --creds=%(echo $ARTIFACTORY_USER:$ARTIFACTORY_TOKEN) docker://%{image_frontend}; do sleep 10; done'

%build
skopeo copy --additional-tag %{image_db} docker://%{image_db} docker-archive:%{image_db_tar}
skopeo copy --src-creds=%(echo $ARTIFACTORY_USER:$ARTIFACTORY_TOKEN) --additional-tag %{image_frontend} docker://%{image_frontend} docker-archive:%{image_frontend_tar}
sed -e 's,@@fawkes-discovery-frontend-image@@,%{image_frontend},' -i deployments/discovery-frontend-template.yml
sed -e 's,@@fawkes-discovery-db-image@@,%{image_db},' deployments/discovery-database-template.yml > deployments/discovery-database.yml
sed -e 's,@@mongo-version@@,%{image_db_tag},' -i init/fawkes-discovery-database-setup.sh
sed -e 's,@@bucket@@,%{bucket},' -i init/fawkes-discovery-frontend-setup.sh
sed -e 's,@@frontend-version@@,%{image_frontend_tag},' -i init/fawkes-discovery-frontend-setup.sh


%install
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} configs/frontend/%{name}.yml
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} configs/mongo/mongo-init.js
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} deployments/discovery-database.yml
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} deployments/discovery-frontend-template.yml
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} classification/fawkes-discovery-classes.json
install -D -m 0644 -t %{buildroot}%{_unitdir} init/fawkes-discovery-frontend.service
install -D -m 0644 -t %{buildroot}%{_unitdir} init/fawkes-discovery-database.service
install -D -m 0644 -t %{buildroot}%{_unitdir} client/fawkes-discovery-client.service
install -D -m 0755 -t %{buildroot}%{_sbindir} client/fawkes-discovery-client.sh
install -D -m 0755 -t %{buildroot}%{_sbindir} init/fawkes-discovery-frontend-setup.sh
install -D -m 0755 -t %{buildroot}%{_sbindir} init/fawkes-discovery-database-setup.sh
install -D -m 0644 -t %{buildroot}%{imagedir} %{image_frontend_tar}
install -D -m 0644 -t %{buildroot}%{imagedir} %{image_db_tar}
install -D -m 0755 -t %{buildroot}%{_sbindir} %{bmcbin}

%clean
rm -f %{image_frontend_tar}
rm -f %{image_db_tar}

# These macros will handle sysv initscripts migration transparently (as long as initscripts and systemd services have similar names)
# These also tell systemd about changed unit files--that systemctl daemon-reload should be invoked
%pre
%service_add_pre fawkes-discovery-database.service
%service_add_pre fawkes-discovery-frontend.service

%post
podman load -i %{imagedir}/%{image_db_tar}
podman load -i %{imagedir}/%{image_frontend_tar}
%service_add_post fawkes-discovery-frontend.service
%service_add_post fawkes-discovery-database.service

%preun
%service_del_preun fawkes-discovery-frontend.service
%service_del_preun fawkes-discovery-database.service

%postun
%service_del_postun fawkes-discovery-frontend.service
%service_del_postun fawkes-discovery-database.service
# only on uninstalls stop and remove the container, for upgrades leave it alone.
# https://docs.fedoraproject.org/en-US/packaging-guidelines/Scriptlets/#_syntax
if [ $1 -eq 0 ] ; then
    podman rmi %{image_frontend}
    podman rmi %{image_db}
fi

%files
%license LICENSE
%doc README.adoc
%defattr(-,root,root)
%attr(644, root, root) %{_sysconfdir}/%{name}/%{name}.yml
%attr(644, root, root) %{_sysconfdir}/%{name}/mongo-init.js
%attr(644, root, root) %{_sysconfdir}/%{name}/discovery-database.yml
%attr(644, root, root) %{_sysconfdir}/%{name}/discovery-frontend-template.yml
%config(noreplace) %attr(644, root, root) %{_sysconfdir}/%{name}/fawkes-discovery-classes.json
%attr(644, root, root) %{_unitdir}/fawkes-discovery-frontend.service
%attr(644, root, root) %{_unitdir}/fawkes-discovery-database.service
%attr(755, root, root) %{_sbindir}/fawkes-discovery-frontend-setup.sh
%attr(755, root, root) %{_sbindir}/fawkes-discovery-database-setup.sh

%{imagedir}/%{image_frontend_tar}
%{imagedir}/%{image_db_tar}
%changelog

%package -n fawkes-discovery-client
Summary: Collects and pushes hardware data for fawkes-discovery.
Requires:      lshw
Requires:      lsblk

%{?systemd_ordering}
%pre -n fawkes-discovery-client
%service_add_pre fawkes-discovery-client.service

%post -n fawkes-discovery-client
%service_add_post fawkes-discovery-client.service

%preun -n fawkes-discovery-client
%service_del_preun fawkes-discovery-client.service

%postun -n fawkes-discovery-client
%service_del_postun fawkes-discovery-client.service

%description -n fawkes-discovery-client
Adds a systemd service for running fawkes-discovery-client

%files -n fawkes-discovery-client
%license LICENSE
%doc README.adoc
%attr(755, root, root) %{_sbindir}/fawkes-discovery-client.sh
%attr(755, root, root) %{_sbindir}/fawkes-client
%{_unitdir}/fawkes-discovery-client.service
