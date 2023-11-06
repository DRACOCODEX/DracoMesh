FROM node:16

WORKDIR /web-portal

ENV PATH="./node_modules/.bin:$PATH"

COPY . .

RUN yarn build

CMD ["yarn", "start"]


