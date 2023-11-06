#!/bin/bash
# Author: Mike Howard
# Company: Dragons Den
# Solution: Drakube Graphyon

# get K8s or K3s API Server URL and Token to connect
APISERVER=$(kubectl config view --minify | grep server | cut -f 2- -d ":" | tr -d " ")
echo "Your Drakube Graphyon API Server URL is $APISERVER"

#create Namespace
kubectl create namespace graphql-mesh

# create K8s API Server Service Account and Namespace for GraphQL Access
kubectl apply -f config_files/service-account.yaml

# Assuming that the service account needs access to the entire cluster resources, we will create a cluster role with access to all resources
# See all Resources: kubectl api-resources
kubectl apply -f config_files/clusterRole.yaml

# Create a CluserRole Binding
kubectl apply -f config_files/clusterRoleBinding.yaml

# create Secret / Token for Service Account
echo "createing Secret (token) for Service Account"
kubectl apply -f config_files/saCreateSecret.yaml

# Validate Service Account was created correctly
echo "verifying account was created.."
CREATED=$(kubectl describe serviceaccount api-service-account -n graphql-mesh)
if [ $? -ne 0 ]; then
  echo "Error exiting.."
  exit 1
fi
echo "Account details: $CREATED"

# verify token was created and assign it to Token Variable
echo "Fetching Token, which will be used as a bearer token in the API call."
TOKEN=$(kubectl get secrets api-service-account-token -o=jsonpath='{.data.token}' -n graphql-mesh | base64 -D)
echo "The Token is: $TOKEN"

# Verify the Service Account has access
echo "verifying new account has access to get pods"
ACCESS=$(kubectl auth can-i get pods --as=system:serviceaccount:graphql-mesh:api-service-account)
if [ $? -ne 0 ]; then
  echo "account does not have access, exiting.."
  exit 1
fi

# test API Access with Curl
echo "Testing API Access..."
curl $APISERVER/api/v1/namespaces -H "Authorization: Bearer $TOKEN" --insecure

# test access to Open API v2
echo "Testing Access to OpenAPI v2..."
curl $APISERVER/openapi/v2 --header "Authorization: Bearer $TOKEN" --insecure