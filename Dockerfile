FROM node:21-alpine
RUN npm install -g @nestjs/cli

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY ./tsconfig.json .

RUN npm run build

CMD [ "npm", "run", "start:dev" ]
