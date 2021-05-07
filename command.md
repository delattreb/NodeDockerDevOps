# Commandes 
***

## Build image
``` lang-sh
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up -d 
docker-compose -f docker-compose.yml -f docker-compose.prod.yml up -d --build
```
## Préparation production
``` lang-sh
docker tag <image-source>[:TAG] <image-cible>[:TAG]
```
# Scan
## Vulnerabilité
``` lang-sh
docker scan <image>
docker scan --json <image>
```

# GitLab
## Test API
>Token:
>Sp9ns2Pjrpwa7y3MqL9T
```
curl --header "PRIVATE-TOKEN: Sp9ns2Pjrpwa7y3MqL9T" "http://76msa-s-gitl-01.linkt.lan/api/v4/projects/16/repository/tags"
```

# Reliquat
## Bash
``` lang-sh
docker exec -it node-app-dev bash
docker exec -it node-app-prod bash

docker build -t node-image:1.0 . 
docker run -v %cd%:/app -v /app/node_modules -d -p 3000:3000 --name node-app node-image:1.0
```