FROM node:18-alpine AS base


WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package*.json ./

# run command
RUN yarn install --frozen-lockfile --production --network-timeout 300000

COPY . .


EXPOSE 8080


CMD ["yarn","start"]
