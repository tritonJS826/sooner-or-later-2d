FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn 

RUN yarn run build

EXPOSE 5000

CMD ["node", "./dist/index.js"]
