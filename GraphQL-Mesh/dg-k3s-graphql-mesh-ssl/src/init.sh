#!/bin/bash
# Author: Mike Howard
# Company: Dragon's Den
# Solution: Drakube Graphyon

# wait on user to confirm to proceed
while true; do
read -p "Ready to Unleash Drakube Graphyon? (y/n) " yn
case $yn in 
	[yY] ) echo ok, here we go;
		break;;
	[nN] ) echo exiting...;
		exit;;
	* ) echo invalid response;;
esac
done

# get K8s or K3s API Server URL and Token to connect
# future: detect k8s or k3s running to change
# using proxy, set API SERVER TO http://127.0.0.1:8080
# add code to ask if you want to use proxy or not and then start proxy and set API server to localhost
APISERVER=http://127.0.0.1:8001
kubectl proxy &>/dev/null &
#APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")

# get TOKEN
TOKEN=$(kubectl get secrets api-service-account-token -o=jsonpath='{.data.token}' -n graphql-mesh | base64 -D)

# grab API from OpenAPI v2 and convert to JSON
# FUTURE: going to have to create a JS service to keep checking for changes, etc.....
echo "reading API from $APISERVER and conversting to swagger.json format..."
curl $APISERVER/openapi/v2 --header "Authorization: Bearer $TOKEN" --insecure > ./src/k3s-swagger.json

# create mesh yaml file with APISERVER URL for GraphQL Mesh Build Process and Strating Server
echo "starting the GraphQL Build Process..."

FILE=.meshrc.yaml
cat <<EOF >$FILE
sources:
  - name: dgK3sGraphQLMesh
    handler:
      openapi:
        source: src/k3s-swagger.json
        endpoint: $APISERVER/
        operationHeaders:
          Authorization: 'Bearer {$TOKEN}'
        ignoreErrorResponses: true
EOF