// src/components/WorkflowGraph.js
import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls } from 'reactflow';
import 'reactflow/dist/style.css';
import dagre from 'dagre';

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 150;
const nodeHeight = 50;

const getLayoutedElements = (nodes, edges, direction = 'LR') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  const layoutedNodes = nodes.map((node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    return {
      ...node,
      targetPosition: isHorizontal ? 'left' : 'top',
      sourcePosition: isHorizontal ? 'right' : 'bottom',
      position: {
        x: nodeWithPosition.x - nodeWidth / 2,
        y: nodeWithPosition.y - nodeHeight / 2,
      },
    };
  });

  return { nodes: layoutedNodes, edges };
};

const WorkflowGraph = () => {
  const initialNodes = [
    { id: '1', data: { label: 'Start Preparation' }, position: { x: 0, y: 0 } },
    { id: '2', data: { label: 'Engineering Mathematics' }, position: { x: 0, y: 0 } },
    { id: '3', data: { label: 'General Aptitude' }, position: { x: 0, y: 0 } },
    { id: '4', data: { label: 'Core Subjects' }, position: { x: 0, y: 0 } },
    { id: '5', data: { label: 'Revision' }, position: { x: 0, y: 0 } },
    { id: '6', data: { label: 'Mock Tests' }, position: { x: 0, y: 0 } },
    { id: '7', data: { label: 'Exam Day' }, position: { x: 0, y: 0 } },
  ];

  const initialEdges = [
    { id: 'e1-2', source: '1', target: '2', animated: true },
    { id: 'e1-3', source: '1', target: '3', animated: true },
    { id: 'e2-4', source: '2', target: '4', animated: true },
    { id: 'e3-4', source: '3', target: '4', animated: true },
    { id: 'e4-5', source: '4', target: '5', animated: true },
    { id: 'e5-6', source: '5', target: '6', animated: true },
    { id: 'e6-7', source: '6', target: '7', animated: true },
  ];

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState(initialEdges);

  useEffect(() => {
    const { nodes: layoutedNodes } = getLayoutedElements(
      initialNodes,
      initialEdges,
      'LR' // Left to Right layout
    );
    setNodes(layoutedNodes);
  }, []);

  return (
    <div style={{ height: '500px', marginBottom: '50px' }}>
      <h2 className="my-4">Workflow Graph</h2>
      <ReactFlow nodes={nodes} edges={edges} fitView>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default WorkflowGraph;
