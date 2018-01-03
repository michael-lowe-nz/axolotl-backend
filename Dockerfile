FROM node:6

COPY . /var/www

WORKDIR /var/www

RUN npm install -g nodemon yarn && yarn

CMD ["npm","start"]

EXPOSE 8888
