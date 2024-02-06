FROM node:18.19.0

# Create app directory
WORKDIR /app
COPY package.json .
RUN yarn
COPY . .
CMD ["yarn", "dev"]
