FROM node:18.13.0-alpine

WORKDIR /usr

COPY package.json ./

COPY tsconfig.json ./

COPY ./ ./

RUN ls -a

RUN yarn install

RUN yarn build

## this is stage two , where the app actually runs

FROM node:18.13.0-alpine

WORKDIR /usr

COPY package.json ./

RUN yarn install --production && yarn cache clean

COPY --from=0 /usr/dist .

RUN yarn global add pm2

EXPOSE 80

CMD ["pm2-runtime","server.js"]