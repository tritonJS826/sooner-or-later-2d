FROM node:14
WORKDIR /websockets
COPY package.json /websockets/
COPY . /websockets/
RUN npm install
EXPOSE 5001 5002
CMD ["npm", "start"]
