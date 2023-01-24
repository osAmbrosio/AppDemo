FROM node:19-alpine3.16 AS builder 
WORKDIR /app
USER 0
COPY . .

RUN npm install
EXPOSE 3000
CMD ["npm", "run", "dev"]
