FROM node:20

WORKDIR /app
ARG APP_ENV=prd

COPY ./package*.json ./
RUN npm ci

COPY ./ ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
