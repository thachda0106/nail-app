FROM node:22

WORKDIR /app
ARG APP_ENV=prd

COPY ./package*.json ./
RUN npm ci --legacy-peer-deps

COPY ./ ./

RUN npm run build

EXPOSE 3000

CMD [ "npm", "run", "start" ]
