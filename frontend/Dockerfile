FROM node:16
WORKDIR /frontend
COPY package.json /frontend/
COPY . /frontend/
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
