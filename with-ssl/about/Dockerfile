FROM node:6.7

# copy our application
COPY package.json /opt/about/
COPY server.js /opt/about/

# get ContainerPilot release and define configuration path
COPY containerpilot.json /etc/
ENV CONTAINERPILOT file:///etc/containerpilot.json
ENV CONTAINERPILOT_VERSION 2.4.3

RUN export CP_SHA1=2c469a0e79a7ac801f1c032c2515dd0278134790 \
    && curl -Lso /tmp/containerpilot.tar.gz \
         "https://github.com/joyent/containerpilot/releases/download/${CONTAINERPILOT_VERSION}/containerpilot-${CONTAINERPILOT_VERSION}.tar.gz" \
    && echo "${CP_SHA1}  /tmp/containerpilot.tar.gz" | sha1sum -c \
    && tar zxf /tmp/containerpilot.tar.gz -C /bin \
    && rm /tmp/containerpilot.tar.gz

EXPOSE 5000
CMD [ "/bin/containerpilot", "node", "/opt/about/server.js" ]
