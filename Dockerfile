FROM nginx:latest
EXPOSE 80
COPY ./dist /usr/share/nginx/html