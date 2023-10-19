#
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
#
Name:      %(echo $NAME)
License:   MIT License
Summary:   An http endpoint for bare metal hardware data.
Version:   0.0.1
BuildArch: %(echo $ARCH)
URL:       https://github.com/Cray-HPE/%{name}
Release:   1
Vendor:    Cray/HPE
Source:    %{name}-%{version}.tar.bz2
Provides:  %{name} = %{version}

%ifarch %ix86
    %global GOARCH 386
%endif
%ifarch aarch64
    %global GOARCH arm64
%endif
%ifarch x86_64
    %global GOARCH amd64
%endif

%description

%prep
%setup -q

%install
install -d %{buildroot}%{_bindir}
install -p -m 0755 %{name} %{buildroot}%{_bindir}/%{name}
install -d %{buildroot}%{_sysconfdir}/%{name}
install -p -m 0644 configs/%{name}.yml %{buildroot}%{_sysconfdir}/%{name}/

%clean
rm %{name}
rm -rf download

%files
%{_bindir}/%{name}
%{buildroot}%{_sysconfdir}/%{name}/%{name}.yml
%defattr(-,root,root,-)
%doc LICENSE
