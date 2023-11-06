import { Node, Edge } from 'reactflow';
import { parseJSONData } from './kubeData';
import {JSONData, jsonData} from "./kubeJSON";
//import * as fs from 'fs';
//import * as path from 'path';
function generateUUID(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

export const nodes: Node[] = [
  {
    id: 'kommander',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: "Kommander Host Cluster", usage: {cpu: " 6.84 cores", mem: " 75.3 Gi"} },
    parentNode: 'DrakubeGraphyon',
  },
  {
    id: 'oci-east',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: "OCI East", usage: {cpu: " 5.49 cores", mem: " 55.1 Gi"} },
    parentNode: 'DrakubeGraphyon',
  },
  {
    id: 'fo',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: "FO Comms Trailer", usage: {cpu: " 5.72 cores", mem: " 57.2 Gi"} },
    parentNode: 'DrakubeGraphyon',
  },
  {
    id: 'other',
    position: { x: 0, y: 0 },
    data: { expanded: false, label: "Other Cloud-West", usage: {cpu: " 6.53 cores", mem: " 75.3 Gi"} },
    parentNode: 'DrakubeGraphyon',
  },
  {
    id: 'DrakubeGraphyon',
    position: { x: 0, y: 0 },
    data: { expanded: true, label: "DrakubeGraphyon", usage: {cpu: " 6.53 cores", mem: " 75.3 Gi"} },
    parentNode: '',
  },
];

export const edges: Edge[] = [
  {
    id: `DrakubeGraphyon->Kommander`,
    source: 'DrakubeGraphyon',
    target: 'kommander',
  },
  {
    id: `DrakubeGraphyon->OCI-east`,
    source: 'DrakubeGraphyon',
    target: 'oci-east',
  },
  {
    id: `DrakubeGraphyon->fo`,
    source: 'DrakubeGraphyon',
    target: 'fo',
  },
  {
    id: `DrakubeGraphyon->other`,
    source: 'DrakubeGraphyon',
    target: 'other',
  },
];

//initial pods generation for given node ID
export function generateNodes(clusterID: string, data: JSONData) {
  let kubeNodes = parseJSONData(data);
  for (const kubeNode of kubeNodes) {
    const kubeNodeUUID = generateUUID();
    let node: Node = {
      id: kubeNodeUUID,
      position: { x: 0, y: 0 },
      data: { expanded: false, label: kubeNode.name, usage: kubeNode.usage},
      parentNode: clusterID,
    }
    let edge: Edge = {
      id: `${clusterID}->${node.id}`,
      source: clusterID,
      target: node.id,
    }
    nodes.push(node);
    edges.push(edge);


    for (const pod of kubeNode.pods) {
      const podUUID = generateUUID();
      let node: Node = {
        id: podUUID,
        position: { x: 0, y: 200 },
        data: { expanded: false, label: pod.name, usage: pod.usage },
        parentNode: kubeNodeUUID,
      }
      let edge: Edge = {
        id: `${kubeNodeUUID}->${podUUID}`,
        source: kubeNodeUUID,
        target: podUUID,
      }
      //add to inital nodes / edges
      nodes.push(node);
      edges.push(edge);

      for (const container of pod.spec.containers) {
        const containerUUID = generateUUID();
        let node: Node = {
          id: containerUUID,
          position: { x: 0, y: 0 },
          data: { expanded: false, label: container.name, running: true },
          parentNode: podUUID,
        }
        let edge: Edge = {
          id: `${podUUID}->${containerUUID}`,
          source: podUUID,
          target: containerUUID,
        }
        //add to inital nodes / edges
        nodes.push(node);
        edges.push(edge);
      }
    }
  }

}
/*
export function generateNodesFromJSONFiles(directoryPath: string) {
  // Read the contents of the directory
  const files = fs.readdirSync(directoryPath);

  // Iterate through each file
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);

    // Check if the file is a JSON file
    if (path.extname(file) === '.json') {
      try {
        // Read the JSON file
        const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        generateNodes(file,jsonData);
        // Add the parsed JSON data to the array
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    }
  });
}

 */