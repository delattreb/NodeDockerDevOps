FROM node:14.15
WORKDIR /app
COPY package.json .
 
# condition
ARG PORT
ARG NODE_ENV
RUN if ["$NODE_ENV" = development]; \
    then npm install; \
    else npm install --only-production; \
    fi

COPY . ./
EXPOSE $PORT
CMD ["node", "index.js"]
