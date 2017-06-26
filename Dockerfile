#FROM ubuntu:16.04
FROM node:latest
RUN mkdir -p /app
COPY . /app
WORKDIR /app
ARG DEBIAN_FRONTEND=noninteractive

RUN npm install -g bower
RUN npm install

#RUN adduser --disabled-password --gecos "" modular

RUN chown -R node:node /app

USER node
WORKDIR /app
RUN bower install

EXPOSE 4000

USER root
CMD ["npm", "start"]

