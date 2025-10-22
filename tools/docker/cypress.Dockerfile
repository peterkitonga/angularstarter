FROM cypress/browsers:22.12.0

WORKDIR /var/opt/app

COPY package.json .
COPY package-lock.json .
COPY cypress/ ./cypress/
COPY cypress.config.ts .

RUN npm ci && npx cypress install

RUN npx cypress verify

ENTRYPOINT ["npx", "cypress"]
