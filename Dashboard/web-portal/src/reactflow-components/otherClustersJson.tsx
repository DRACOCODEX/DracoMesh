import {JSONData} from "./kubeJSON";

export const otherClustersJson: JSONData = {
  "data": {
    "Nodes": {
      "items": [
        {
          "metadata": {
            "labels": {
              "betaKubernetesIoArch": "amd64",
              "betaKubernetesIoOs": "linux",
              "kubernetesIoArch": "amd64",
              "kubernetesIoHostname": "docker-desktop",
              "kubernetesIoOs": "linux",
              "nodeRoleKubernetesIoControlPlane": "",
              "nodeKubernetesIoExcludeFromExternalLoadBalancers": ""
            },
            "name": "DrakubeGraphyon-control-plane"
          }
        },
        {
          "metadata": {
            "labels": {
              "betaKubernetesIoArch": "amd64",
              "betaKubernetesIoOs": "linux",
              "kubernetesIoArch": "amd64",
              "kubernetesIoHostname": "docker-desktop",
              "kubernetesIoOs": "linux",
              "nodeRoleKubernetesIoControlPlane": "",
              "nodeKubernetesIoExcludeFromExternalLoadBalancers": ""
            },
            "name": "DrakubeGraphyon-koverse-node"
          }
        },
        {
          "metadata": {
            "labels": {
              "betaKubernetesIoArch": "amd64",
              "betaKubernetesIoOs": "linux",
              "kubernetesIoArch": "amd64",
              "kubernetesIoHostname": "docker-desktop",
              "kubernetesIoOs": "linux",
              "nodeRoleKubernetesIoControlPlane": "",
              "nodeKubernetesIoExcludeFromExternalLoadBalancers": ""
            },
            "name": "DrakubeGraphyon-devops-node"
          }
        },
        {
          "metadata": {
            "labels": {
              "betaKubernetesIoArch": "amd64",
              "betaKubernetesIoOs": "linux",
              "kubernetesIoArch": "amd64",
              "kubernetesIoHostname": "docker-desktop",
              "kubernetesIoOs": "linux",
              "nodeRoleKubernetesIoControlPlane": "",
              "nodeKubernetesIoExcludeFromExternalLoadBalancers": ""
            },
            "name": "DrakubeGraphyon-belcan-node"
          }
        },
      ]
    },
    "Pods": {
      "items": [
        {
          "metadata": {
            "name": "capg-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-api-server"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "etcd-DrakubeGraphyon-control"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-scheduler"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kubelet-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kubelet-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kubelet-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "calico-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "csi-node-driver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "node-feature-discovery"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "vsphere-csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-apiserver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "calico-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "csi-node-driver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "node-feature-discovery"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "vphere-csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-koverse-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-apiserver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "calico-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "csi-node-driver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "node-feature-discovery"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "vsphere-csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-devops-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-apiserver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "kube-proxy"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "calico-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "csi-node-driver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "node-feature-discovery"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "vsphere-csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-belcan-node",
            "containers": [
              {
                "name": "nginx"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "nginx",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
      ]
    }
  }
};