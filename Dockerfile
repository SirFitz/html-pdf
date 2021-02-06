FROM node:12

RUN apt-get update && apt-get install -yq libgconf-2-4
RUN apt-get install -y vim 

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

USER node

RUN npm install

COPY --chown=node:node . .

EXPOSE 3007

CMD ["node", "server.js"]

