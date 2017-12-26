FROM node:9.3.0-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json yarn.lock /usr/src/app/
RUN yarn install
COPY . /usr/src/app/

EXPOSE 3000
ENTRYPOINT ["yarn"]
CMD ["start"]
