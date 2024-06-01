FROM node-18-debian

WORKDIR /app

COPY package*.json ./

RUN apt-get update && apt-get install -y libc6 libc6-dev libstdc++6 libstdc++6-dev  # Install necessary libraries

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]