# Set the base image to Ubuntu
FROM node:alpine

# Install nodemon
RUN yarn global add nodemon
RUN yarn global add typescript

# Install packages using Yarn
ADD ./package.json /tmp/package.json
RUN cd /tmp && yarn
RUN mkdir -p /app && cp -a /tmp/node_modules /app/

ENV NODE_ENV "production"

# Define working directory
WORKDIR /app
ADD . /app

# Expose port
EXPOSE  3000

RUN npm run prestart:prod

# Run app using nodemon
CMD ["npm", "run", "start:prod"]