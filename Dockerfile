#FROM ubuntu:16.04
FROM node:latest
RUN mkdir -p /app
COPY . /app
WORKDIR /app
ARG DEBIAN_FRONTEND=noninteractive

RUN npm install -g bower
RUN npm install

RUN adduser modular
RUN chown -R modular:modular /app
USER modular

RUN bower install

EXPOSE 4000

ENTRYPOINT ["npm", "start"]

