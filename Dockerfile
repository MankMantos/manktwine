FROM node:dubnium
ARG version
RUN apt-get update && \
    apt-get install -y --no-install-recommends libsecret-1-0 && \
    rm -rf /var/lib/apt/list/*
RUN npm install --unsafe-perm=true -g "@mankmantos/manktwine-cli@$version"
ENTRYPOINT [ "twine" ]