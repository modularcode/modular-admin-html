#FROM ubuntu:16.04
FROM node:alpine
RUN mkdir -p /app
COPY . /app
WORKDIR /app
ARG DEBIAN_FRONTEND=noninteractive

RUN npm install -g bower \
&& npm install \
&& chown -R node:node /app \
&& npm rebuild node-sass \
&& npm cache clean --force

USER node
WORKDIR /app
RUN bower install

EXPOSE 4000

CMD ["npm", "start"]

