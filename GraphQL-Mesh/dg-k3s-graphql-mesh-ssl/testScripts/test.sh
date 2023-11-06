#!/bin/bash
# Author: Mike Howard
# Company: Dragon's Den
# Solution: Drakube Graphyon

# test access
kubectl auth can-i get pods --as=system:serviceaccount:graphql-mesh:mke
if [ $? -ne 0 ]; then
  echo "account does not have access, exiting.."
  exit 1
fi

# Validate Service Account was created correctly
echo "verifying account was created.."
CREATED=$(kubectl describe serviceaccount mke -n graphql-mesh)
if [ $? -ne 0 ]; then
  echo "Error exiting.."
  exit 1
fi

TOKEN=$(kubectl get secrets admin-user-token -o=jsonpath='{.data.token}' -n kubernetes-dashboard | base64 -D)
echo $TOKEN

