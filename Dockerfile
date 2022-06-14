FROM node:alpine

WORKDIR /app

COPY *.json /app/

RUN npm install

COPY . /app/

CMD ["npm", "start"]

