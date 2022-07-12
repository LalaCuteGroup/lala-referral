FROM node:slim

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . ./

EXPOSE 3000

CMD ["npm","start"]