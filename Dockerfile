# Suport System
FROM node:17-alpine

# Container Work directory
WORKDIR /server

# Image Action
COPY package.json .

# Buildtime Executions
RUN npm install

# Image Actions
COPY . .

# Container Ports Exposure
EXPOSE 4000

# Runtime Executions
CMD ["npm", "run", "dev"]
