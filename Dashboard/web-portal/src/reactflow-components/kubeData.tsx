import {JSONData, jsonData} from "./kubeJSON";


// CPU usage, Memory usage
const nodeStatuses: Record<string, [string, string]> = {
  'DrakubeGraphyon-control-plane-czhbd': ['15.38%', '39.19%'],
  'DrakubeGraphyon-control-plane-7vzbx': ['12.55%','41.99%'],
  'DrakubeGraphyon-md-0-589b884cb5-gpd8c': ['24.13%','36.32%'],
  'DrakubeGraphyon-md-0-589b884cb5-zgnhq': ['11.76%', '51.75%'],
  'DrakubeGraphyon-md-0-589b884cb5-9wcwn': ['7.65%','42.75%'],
  'DrakubeGraphyon-md-0-589b884cb5-d6d26': ['10.76%','47.89%'],
  'DrakubeGraphyon-control-plane-jmnwv': ['14.63%','47.33%'],
  'DrakubeGraphyon-control-plane': [generatePodStatus().cpu, generatePodStatus().mem],
  'DrakubeGraphyon-koverse-node': [generatePodStatus().cpu, generatePodStatus().mem],
  'DrakubeGraphyon-devops-node': [generatePodStatus().cpu, generatePodStatus().mem],
  'DrakubeGraphyon-belcan-node': [generatePodStatus().cpu, generatePodStatus().mem],
};

function generatePodStatus(): { cpu: string, mem: string } {
  const cpuMin = 7.65;
  const cpuMax = 24.13;
  const memMin = 36.32;
  const memMax = 51.75;

  // Generate random CPU value
  const randomCpu = Math.random() * (cpuMax - cpuMin) + cpuMin;
  const roundedCpu = Math.round(randomCpu * 100) / 100;

  // Generate random Memory value
  const randomMem = Math.random() * (memMax - memMin) + memMin;
  const roundedMem = Math.round(randomMem * 100) / 100;

  return { cpu: `${roundedCpu}%`, mem: `${roundedMem}%` };
}

class Cluster {
  name: string;
  nodes: KubeNode[];

  constructor() {
    this.name = "Default Cluster";
    this.nodes = [];
  }
}

interface KubeNode {
  name: string;
  labels: { [key: string]: string };
  pods: KubePod[];
  usage: {
    cpu: string;
    mem: string;
  }
}

interface KubePod {
  name: string;
  spec: {
    nodeName: string;
    containers: KubeContainer[];
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
  usage: {
    cpu: string;
    mem: string;
  }
}

interface KubeContainer {
  name: string;
}

function parseJSONData(jsonData: JSONData): KubeNode[] {
  const nodes: KubeNode[] = [];

  for (const nodeItem of jsonData.data.Nodes.items) {
    const nodeStatus = nodeStatuses[nodeItem.metadata.name]
    const node: KubeNode = {
      name: nodeItem.metadata.name,
      labels: nodeItem.metadata.labels,
      pods: [],
      usage: { //hardcoded usage stats
        cpu: nodeStatus[0],
        mem: nodeStatus[1]
      }
    };

    for (const podItem of jsonData.data.Pods.items) {
      if (podItem.spec.nodeName === node.name) {
        const podStatus = generatePodStatus();
        const pod: KubePod = {
          name: podItem.metadata.name,
          spec: {
            nodeName: podItem.spec.nodeName,
            containers: []
          },
          status: podItem.status,
          usage: { //hardcoded usage stats
            cpu: podStatus.cpu,
            mem: podStatus.mem
          }
        };

        for (const containerItem of podItem.spec.containers) {
          const container: KubeContainer = {
            name: containerItem.name
          };
          pod.spec.containers.push(container);
        }

        node.pods.push(pod);
      }
    }

    nodes.push(node);
  }

  return nodes;
}




export {Cluster, parseJSONData}