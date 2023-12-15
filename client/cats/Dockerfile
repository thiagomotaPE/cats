FROM node:20

WORKDIR /app

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN npm run build

EXPOSE 4200

CMD ["ng", "serve"]     