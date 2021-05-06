docker build -t node-image:1.0 . 
docker run -v %cd%:/app -v /app/node_modules -d -p 3000:3000 --name node-app node-image:1.0


docker exec -it node-app-dev bash
docker exec -it node-app-prod bash

docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
