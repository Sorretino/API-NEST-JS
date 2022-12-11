FROM node:16-alpine

WORKDIR /home/node/app

ARG DATABASE_URL="mysql://u231026870_ApiNestmaster:Data2023@156.67.74.201:3306/u231026870_ApiNestmaster"
ENV DATABASE_URL $DATABASE_URL

COPY package.json ./

COPY prisma ./prisma/

RUN npm install

RUN npx prisma generate

COPY . .

EXPOSE 3333

CMD npm start





