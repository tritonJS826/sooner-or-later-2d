FROM node:14
WORKDIR /container
COPY package.json /container/
COPY . /container/
RUN npm install
EXPOSE 5000
CMD ["npm", "start"]
