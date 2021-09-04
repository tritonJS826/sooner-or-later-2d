FROM node:16

RUN  mkdir -p /usr/src/app

WORKDIR /usr/ssrc/app

COPY . .

RUN yarn

RUN yarn run build
 
EXPOSE 3000

CMD ["node","./dist/index.js"]
