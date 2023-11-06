import React, { MouseEventHandler } from 'react';
import { Handle, NodeProps, Position, useReactFlow } from 'reactflow';

import styles from './styles.module.css';


export default function CustomNode({ data, id, xPos=0, yPos=0 }: NodeProps) {
  let usage = '';
  let cpu = '';
  let mem = '';

  if (data.expanded) {
    usage = '';
    cpu = '';
    mem = '';
  }
  else if ('usage' in data) { // Node / Pod display usage data
    cpu = `CPU: ${data.usage.cpu}`;
    mem = `Memory: ${data.usage.mem}`;
  }
  if ('running' in data) {
    if (data.running) {
      usage = 'status:' + '\u{1F7E2}';
    } else {
      usage = 'status:' + '\u{1F534}';
    }
  }

  // based on the state of the node
  const label = data.label;

  const labelStyle = {
    fontSize: '16px',
    color: 'black',
    background: 'white',
    // Add additional styling properties as needed
  };

  const cpuStyle = {
    fontSize: '14px',
    color: 'black',
    // Add additional styling properties as needed
  };

  const memStyle = {
    fontSize: '14px',
    color: 'black',
    // Add additional styling properties as needed
  };

  const usageStyle = {
    fontSize: '14px',
    color: 'black',
    // Add additional styling properties as needed
  };


  return (
    <div className={styles.node} >
      <div className={styles.label} style={labelStyle}>{label}</div>
      <div className={styles.label} style={cpuStyle}>{cpu}</div>
      <div className={styles.label} style={memStyle}>{mem}</div>
      <div className={styles.label} style={usageStyle}>{usage}</div>
      <Handle position={Position.Bottom} type="target" />
      <Handle position={Position.Bottom} type="source" />
    </div>
  );
}


