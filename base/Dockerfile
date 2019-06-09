FROM ubuntu:16.04

RUN apt-get update -y
RUN apt-get install nginx -y

Run echo 'Docker is Amazing!' > /var/www/html/index.html
EXPOSE 80

ENTRYPOINT ["nginx"]
CMD ["-g", "daemon off;"]
