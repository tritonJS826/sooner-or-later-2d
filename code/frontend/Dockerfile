FROM node:16
WORKDIR /frontend
COPY package.json /frontend/
COPY . /frontend/
RUN yarn upgrade 
EXPOSE 3000
CMD ["yarn","run","start"]
