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
Summary:       An http endpoint for bare metal hardware data.
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
%define image_db_tag latest
%define image_db docker.io/library/mongo:%{image_db_tag}
%define image_db_tar %{name}-mongodb.tar

%description
An http endpoint for bare metal hardware data.

%prep
env

%setup -q
echo bucket: %{bucket} tag: %{image_frontend_tag} current_branch: %{current_branch}
timeout 15m sh -c 'until skopeo inspect --creds=%(echo $ARTIFACTORY_USER:$ARTIFACTORY_TOKEN) docker://%{image_frontend}; do sleep 10; done'

%build
skopeo copy --src-creds=%(echo $ARTIFACTORY_USER:$ARTIFACTORY_TOKEN) --additional-tag %{image_frontend} docker://%{image_frontend} docker-archive:%{image_frontend_tar}
skopeo copy --additional-tag %{image_db} docker://%{image_db} docker-archive:%{image_db_tar}

%install
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} configs/%{name}.yml
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} deployments/discovery-db.yml
install -D -m 0644 -t %{buildroot}%{_sysconfdir}/%{name} deployments/discovery-frontend-template.yml
install -D -m 0644 -t %{buildroot}%{_unitdir}/podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dfrontend.yml.service.d pod-init/override.conf
install -D -m 0755 -t %{buildroot}%{_sbindir} pod-init/fawkes-discovery-setup.sh
install -D -m 0644 -t %{buildroot}%{imagedir} %{image_frontend_tar}
install -D -m 0644 -t %{buildroot}%{imagedir} %{image_db_tar}

%clean
rm -f %{image_frontend_tar}
rm -f %{image_db_tar}

# These macros will handle sysv initscripts migration transparently (as long as initscripts and systemd services have similar names)
# These also tell systemd about changed unit files--that systemctl daemon-reload should be invoked
%pre
%service_add_pre podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dmongo.yml.service
%service_add_pre podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dfrontend.yml.service

%post
podman load -i %{imagedir}/%{image_db_tar}
podman load -i %{imagedir}/%{image_frontend_tar}
%service_add_post podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dmongo.yml.service
%service_add_post podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dfrontend.yml.service

%preun
%service_del_preun podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dfrontend.yml.service
%service_del_preun podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dmongo.yml.service

%postun
%service_del_postun podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dfrontend.yml.service
%service_del_postun podman-kube@-etc-fawkes\\x2ddiscovery-discovery\\x2dmongo.yml.service
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
%attr(644, root, root) %{_sysconfdir}/%{name}/discovery-db.yml
%attr(644, root, root) %{_sysconfdir}/%{name}/discovery-frontend-template.yml
%attr(644, root, root) %{_unitdir}/podman-kube@-etc-fawkes\x2ddiscovery-discovery\x2dfrontend.yml.service.d/override.conf
%attr(755, root, root) %{_sbindir}/fawkes-discovery-setup.sh

%{imagedir}/%{image_frontend_tar}
%changelog
