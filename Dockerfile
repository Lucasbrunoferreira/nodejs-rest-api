FROM node:alpine

RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY package.json ./
RUN npm install

COPY . ./

EXPOSE 3000

CMD [ "node", "app.js" ]
