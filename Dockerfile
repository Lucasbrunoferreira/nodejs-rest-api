FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY /build/ ./

EXPOSE 3000

CMD [ "node", "server.js" ]
