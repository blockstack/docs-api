FROM node:8
WORKDIR /src/
COPY . .
RUN npm install
CMD npm run start
