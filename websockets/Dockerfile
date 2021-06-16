FROM node:16

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 5001 5002

CMD ["yarn", "start"]

