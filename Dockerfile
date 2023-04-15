FROM node:latest

SHELL ["/bin/bash", "-c"]

RUN apt -y update && apt -y upgrade
RUN apt install -y neovim tmux

WORKDIR /app
