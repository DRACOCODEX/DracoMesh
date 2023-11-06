#!/bin/bash
# Author: Mike Howard
# Company: Dragon's Den
# Solution: Drakube Graphyon

# get K8s or K3s API Server URL and Token to connect
# future: detect k8s or k3s running to change
# https://iximiuz.com/en/posts/kubernetes-api-call-simple-http-client/
#APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")
TOKEN=$(kubectl describe secret default-token | grep -E '^token' | cut -f2 -d':' | tr -d " ")


# admin token
APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")
#TOKEN=$(kubectl -n kube-system get secrets \
    #$(kubectl -n kube-system get serviceaccounts/default -o jsonpath='{.secrets[0].name}') \
   # -o jsonpath='{.data.token}' | base64 --decode)

if [ -z "$TOKEN" ]
then
      echo "\$TOKEN is NULL"
else
      echo "\$my_var is NOT NULL"
      #kubectl -n kube-system create token default
fi

# kubectl describe secret default-token -n kube-system | grep -E '^token' | cut -f2 -d':' | tr -d " "

# kube-system token
# kubectl -n kube-system describe secret k3s-serving | grep -E '^token' | cut -f2 -d':' | tr -d " "

#test for tokens, zero response, then create account and use it
# future add to init.sh script
#kubectl -n kube-system get serviceaccounts/default -o jsonpath='{.secrets[0].name}' -o jsonpath='{.data.token}' | base64 --decode


# grab API from OpenAPI v2 and convert to JSON
# FUTURE: going to have to create a JS service to keep checking for changes, etc.....
echo "API Server Base URl: $APISERVER"
echo "Token: $TOKEN"

# open api / v2 endpoint
# curl $APISERVER/openapi/v2 --header "Authorization: Bearer $TOKEN" --insecure

# api/v1 endpoint
curl $APISERVER/api/v1 --header "Authorization: Bearer $TOKEN"

# api/v1 endpoint without insecure flag
# curl $APISERVER/api/v1 --header "Authorization: Bearer $TOKEN"

# open api / v2 endpoint without insecure flag
# curl $APISERVER/openapi/v2 --header "Authorization: Bearer $TOKEN" 

# with proxy running# 
# api/v1 endpoint without insecure flag
#curl http://127.0.0.1:8001/api/v1

#curl http://127.0.0.1:8001/openapi/v2
