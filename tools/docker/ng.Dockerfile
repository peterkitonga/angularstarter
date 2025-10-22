FROM node:20.19.5-alpine

RUN npm install -g @angular/cli@20.3.6

WORKDIR /var/opt/app

ENTRYPOINT [ "ng" ]
