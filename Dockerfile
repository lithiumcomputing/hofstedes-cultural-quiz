FROM alpine:3.11

WORKDIR /usr/src
COPY . /usr/src

RUN apk update && \
    apk add nodejs npm && \
    npm install && \
    chmod +x ./bootstrap.sh && ls

EXPOSE 8000
CMD /usr/src/bootstrap.sh
