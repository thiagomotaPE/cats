FROM node:20 as angular

WORKDIR /usr/src/front

COPY . .

RUN npm install --quiet --no-optional --no-fund --loglevel=error 

CMD ["ng", "build"]  

FROM nginx:alpine

VOLUME /var/cache/nginx

# RUN rm -rf /usr/share/nginx/html/*

COPY --from=angular /usr/src/front/dist/cats/browser /usr/share/nginx/html

COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80