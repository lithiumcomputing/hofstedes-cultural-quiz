FROM alpine:3.11

WORKDIR /usr/src
COPY . /usr/src

RUN apk update && \
    apk add nodejs npm && \
    npm install

EXPOSE 4200
#CMD npx ng serve
