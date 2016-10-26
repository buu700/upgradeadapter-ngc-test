FROM google/cloud-sdk

MAINTAINER Ryan Lester <hacker@linux.com>

LABEL Name="upgradeadapter-ngc-test"

RUN apt-get -y --force-yes update
RUN apt-get -y --force-yes install curl lsb-release apt-transport-https

RUN echo " \
	deb https://deb.nodesource.com/node_6.x $(lsb_release -c | awk '{print $2}') main \
" >> /etc/apt/sources.list
RUN curl -s https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add -

RUN apt-get -y --force-yes update
RUN apt-get -y --force-yes dist-upgrade

RUN apt-get -y --force-yes install build-essential git nano nodejs

RUN npm -g install \
	@angular/common@2.1.1 \
	@angular/compiler@2.1.1 \
	@angular/compiler-cli@2.1.1 \
	@angular/core@2.1.1 \
	@angular/platform-browser@2.1.1 \
	@angular/platform-server@2.1.1 \
	rxjs@5.0.0-beta.12 \
	typescript@2.0.3 \
	zone.js@0.6.26

VOLUME /test
WORKDIR /test
CMD /bin/bash
