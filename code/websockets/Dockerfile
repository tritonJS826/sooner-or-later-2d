FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN yarn install

RUN yarn run build

EXPOSE 5001 5002 5500-5600

CMD ["node", "./dist/app.js"]

