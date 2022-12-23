FROM node:18-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json .

RUN npm install -g npm@9.2.0

RUN npm install

# Bundle app source
COPY . .

EXPOSE 5173

CMD [ "npm", "run", "dev" ]
