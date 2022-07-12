FROM node:16.13.0

WORKDIR /app

COPY package.json ./

COPY . .

RUN yarn

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:prod" ]
