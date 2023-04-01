FROM node:18-alpine

WORKDIR /productivity-app-frontend

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "start"]

