FROM node:current-alpine3.20

WORKDIR /app

COPY package.json ./

RUN npm install

RUN npm install pg

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]



