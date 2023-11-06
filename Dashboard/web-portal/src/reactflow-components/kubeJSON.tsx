export interface JSONData {
  data: {
    Nodes: {
      items: {
        metadata: {
          name: string;
          labels: {
            [key: string]: string;
          };
        };
      }[];
    };
    Pods: {
      items: {
        metadata: {
          name: string;
        };
        spec: {
          nodeName: string;
          containers: {
            name: string;
          }[];
        };
        status: {
          containerStatuses: {
            containerID: string;
            name: string;
            state: {
              running: null;
            };
          }[];
        };
      }[];
    };
  };
}
export const jsonData: JSONData = {
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
            "name": "DrakubeGraphyon-control-plane-czhbd"
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
            "name": "DrakubeGraphyon-control-plane-7vzbx"
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
            "name": "DrakubeGraphyon-md-0-589b884cb5-zgnhq"
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
            "name": "DrakubeGraphyon-md-0-589b884cb5-d6d26"
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
            "name": "DrakubeGraphyon-control-plane-jmnwv"
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
            "name": "DrakubeGraphyon-md-0-589b884cb5-gpd8c"
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
            "name": "DrakubeGraphyon-md-0-589b884cb5-9wcwn"
          }
        },
      ]
    },
    "Pods": {
      "items": [
        {
          "metadata": {
            "name": "CoreDNS"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "Kube-Prometheus"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "Kommander-Licensing"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "fluent bit"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "capg-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "capv-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "cappp-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "capz-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "capa-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "vsphere-csi-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "kube scheduler"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "vsphere-cloud-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "nodeName": "DrakubeGraphyon-control-plane-czhbd",
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
            "name": "CoreDNS"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "Kube-Prometheus"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "Kommander-Licensing"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "fluent bit"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "capg-controller manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "capv-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "cappp-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "capz-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "capa-controller-manager"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "vsphere-csi-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "etcd-DrakubeGraphyon-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "kube scheduler"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "csi-node"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "name": "vsphere-cloud-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
        },{
          "metadata": {
            "name": "csi-node-driver"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
            "nodeName": "DrakubeGraphyon-control-plane-7vzbx",
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
        },// ------ NODE ------ \\
        {
          "metadata": {
            "name": "DrakubeGraphyon-dashboard"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "GraphQL-Server"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "cluster-observer"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "gitea-0"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "prometheus-server"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "DrakubeGraphyon-kafka-cluster"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "calico-typha"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-appmgmt"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-webhook"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-capimate"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "grafana"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "prometheus-kube-state"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kubecost-traefik"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "centralized-grafana"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-kubecost-thnos-query-frontend"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kubecost-grafana"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rook-ceph"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rook-ceph-crashcollecter"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "ankoringress-nginx"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "DrakubeGraphyon-kaka-cluster-zookeeper"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "prometheus-traefik-certs-kommander-default"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-cm"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kommander-traefik"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rfluentbit"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rlogginf-operator"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kubetunnel"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kubecost-grafana"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rook-ceph-osd"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rook-ceph-mgr"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kubetunnel-webhook"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "kube-prometheus-stack"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "prometheus-traefik-certs-kommander-federation"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "traefik-forward"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rkube-oldc"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "rook-ceph-mon"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "dex-dex-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "source-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "notification-controller"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "name": "speaker"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-zgnhq",
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
        {// ------ Node ------ \\
          "metadata": {
            "name": "kommander-kommander-ui"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
            "containers": [
              {
                "name": "REACT Dashboard"
              },
              {
                "name": "GraphQL"
              }
            ]
          },
          "status": {
            "containerStatuses": [
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "REACT Dashboard",
                "state": {
                  "running": null
                }
              },
              {
                "containerID": "docker://c258b6c94e0dcc264f930e211c550e66910a7117a60035b41368da3c660587ca",
                "name": "GraphQL",
                "state": {
                  "running": null
                }
              }
            ]
          }
        },
        {
          "metadata": {
            "name": "demo-nexus"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "name": "demo-app"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "name": "pods 4...32"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-d6d26",
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
        }, // ------ NODE ------- \\
        {
          "metadata": {
            "name": "end-DrakubeGraphyon-control"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
            "name": "kube scheduler"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
            "name": "pods 7 .. 17"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
            "name": "4...6 cert-mgr"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
            "name": "pods 18..22"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-control-plane-jmnwv",
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
        }, // NODE
        {
          "metadata": {
            "name": "1...9 (grafana-loki)"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
            "name": "demo-app (kuma)"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
            "name": "pods 13... 33"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
            "name": "kube-fed"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
            "name": "dip-insights"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
            "name": "pods 34... 36"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-gpd8c",
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
        }, // NODE
        {
          "metadata": {
            "name": "1..2 DrakubeGraphyon-kafka"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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
            "name": "reddis"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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
            "name": "pods 6...30"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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
            "name": "nexus"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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
            "name": "keyloak"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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
            "name": "pods 31..35"
          },
          "spec": {
            "nodeName": "DrakubeGraphyon-md-0-589b884cb5-9wcwn",
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


