FROM alpine

RUN apk add --update nodejs npm

RUN mkdir autocar-frontend
WORKDIR /autocar-frontend

COPY ./ ./
RUN npm install

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]