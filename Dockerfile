FROM node:14-alpine

RUN npm install -g @nestjs/cli@8.0.0

USER node

WORKDIR /code
