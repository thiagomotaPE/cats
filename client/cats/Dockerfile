FROM node:20 as angular

WORKDIR /usr/src/front

COPY . .

RUN npm install

RUN npm run build

FROM nginx:alpine

VOLUME /var/cache/nginx

COPY --from=angular /usr/src/front/dist/cats/browser /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80