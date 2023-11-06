import React, { useCallback, useState, useEffect } from 'react';
import ReactFlow, {
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlowProvider,
  MiniMap,
  Background,
  OnNodesChange,
  OnEdgesChange,
  NodeMouseHandler,
  Node,
  Edge,
} from 'reactflow';
import {generateNodes} from './initialElements';
import CustomNode from './CustomNode';
import { nodes as initialNodes, edges as initialEdges } from './initialElements';
import useAnimatedNodes from './useAnimatedNodes';
import useExpandCollapse from './useExpandCollapse';
import { jsonData } from './kubeJSON';
import {otherClustersJson} from "./otherClustersJson";
import 'reactflow/dist/style.css';
import styles from './styles.module.css';

const proOptions = { account: 'paid-pro', hideAttribution: true };

const nodeTypes = {
  custom: CustomNode,
};

type ExpandCollapseExampleProps = {
  treeWidth?: number;
  treeHeight?: number;
  animationDuration?: number;
};

//parse json files in dir

// init Nodes in cluster:
//generateNodesFromJSONFiles("./json_files");
generateNodes("kommander", jsonData);
generateNodes("other", otherClustersJson);
generateNodes("oci-east", otherClustersJson);
generateNodes("fo", otherClustersJson);



function ReactFlowPro({ treeWidth = 220, treeHeight = 100, animationDuration = 300 }: ExpandCollapseExampleProps = {}) {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const { nodes: visibleNodes, edges: visibleEdges } = useExpandCollapse(nodes, edges, { treeWidth, treeHeight });
  const { nodes: animatedNodes } = useAnimatedNodes(visibleNodes, { animationDuration });

  const onNodesChange: OnNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
  const onEdgesChange: OnEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);

  const onNodeClick: NodeMouseHandler = useCallback(
    (_, node) => {
      setNodes((nds) => {
        const parent = nds.find((n) => n.id === node.parentNode);
        if (!parent) {
          return nds;
        }
        const grandparent = nds.find((n) => n.id === parent.parentNode);
        const updatedNodes = nds.map((n) => {
          if (n.id === node.id) {
            // Toggle the expanded state of the clicked node
            return {
              ...n,
              data: { ...n.data, expanded: !n.data.expanded },
            };
          } else if (grandparent && n.parentNode === grandparent.id) {
            // Collapse the children of the grandparent node (excluding the parent node)
            return {
              ...n,
              data: { ...n.data, expanded: n.id === parent.id ? n.data.expanded : false },
            };
          } else if (n.parentNode == parent.id && n.id != node.id) {
            // collapse siblings of clicked node
            return {
              ...n,
              data: { ...n.data, expanded: false },
            };
          }
          return n;
        });

        return updatedNodes;
      });
    },
    [setNodes]
  );










  return (
    <ReactFlow
      fitView
      nodes={animatedNodes}
      edges={visibleEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onNodeClick={onNodeClick}
      proOptions={proOptions}
      nodeTypes={nodeTypes}
      nodesDraggable={false}
      nodesConnectable={false}
      className={styles.viewport}
      zoomOnDoubleClick={false}
      elementsSelectable={false}
    >
      <Background />
      <MiniMap />
    </ReactFlow>
  );
}

function ReactFlowWrapper(props: ExpandCollapseExampleProps) {
  return (
    <ReactFlowProvider >
      <ReactFlowPro {...props} />
    </ReactFlowProvider>
  );
}

export default ReactFlowWrapper;
