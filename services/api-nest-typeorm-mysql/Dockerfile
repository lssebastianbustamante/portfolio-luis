FROM node:18

RUN npm install -g npm@10.8.2

RUN npm install -g ts-node 

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run" , "start:dev" ]