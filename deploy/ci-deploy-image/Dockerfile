# Note: docker build is expected to be ran from the repo root, *not* from this directory!
# docker build -f ./deploy/ci-deploy-image/Dockerfile .

# Use Node as base image: the main build step is `gatsby build`
FROM node:12.9.0-alpine
ENV AWSCLI_VERSION "1.16.225"

# Install AWS CLI
RUN apk add --update \
    python \
    python-dev \
    py-pip \
    build-base \
    && pip install awscli==$AWSCLI_VERSION --upgrade \
    && apk --purge -v del py-pip \
    && rm -rf /var/cache/apk/*
