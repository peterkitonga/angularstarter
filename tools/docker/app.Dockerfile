FROM node:20.19.5-alpine

WORKDIR /var/opt/app

COPY package.json /var/opt/app

RUN npm install

COPY . /var/opt/app

EXPOSE 4200

CMD [ "npx", "ng", "serve", "--host", "0.0.0.0" ]
