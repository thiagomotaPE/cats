FROM node:20 as angular

WORKDIR /usr/src/front

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error

CMD ["ng", "serve"]     

FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=angular app/dist/cats /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf