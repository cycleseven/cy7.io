# Note: `docker build` should be executed from the repo root, *not* from this directory!
# docker build -f ./deploy/ci-deploy-image/Dockerfile .

# Use Node as base image: the main build step is `gatsby build`
FROM node:12.9.1
ENV AWSCLI_VERSION "1.16.225"
RUN apt-get update && apt-get install -y python3-pip && pip3 install awscli==$AWSCLI_VERSION --upgrade
