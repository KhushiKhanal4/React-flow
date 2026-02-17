'use client';

import {
    ReactFlow, Background, Controls, applyEdgeChanges, applyNodeChanges, type Node,
    type Edge, type NodeChange, type EdgeChange, type Connection, addEdge, MiniMap
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useState, useCallback, use } from 'react';

const initialNodes: Node[] = [
    {
        id: 'n1',
        position: { x: 0, y: 0 },
        data: { label: 'Node 1' },
        type: 'input',
    },
    {
        id: 'n2',
        position: { x: 100, y: 100 },
        data: { label: 'Node 2' },
    },
];

const initialEdges: Edge[] = [
    // {
    //     id: 'n1-n2',
    //     source: 'n1',
    //     target: 'n2',
    //     type: 'smoothstep',
    //     label: 'n1 to n2',
    // },
];


export const Workflow = () => {

    //useState is used to manage the state of nodes and edges in the React Flow component. The initial state is set to the predefined initialNodes and initialEdges arrays.
    const [nodes, setNodes] = useState<Node[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);

    //useCallback is used to memoize the functions so that they are not recreated on every render, which can improve performance when passing these functions as props to child components.
    const onNodesChange = useCallback(
        (changes: NodeChange[]) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
        [],
    );
    const onEdgesChange = useCallback(
        (changes: EdgeChange[]) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
        [],
    );

    const onConnect = useCallback(
        (params: Connection) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
        [],
    );

    return (
        <div className="p-4 border border-gray-700 rounded-md w-full h-96">

            <ReactFlow
                nodes={nodes}
                edges={edges}
                fitView
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                panOnScroll={true}
                selectionOnDrag={true}
                panOnDrag={false}
            >
                <MiniMap />
                <Background />
                <Controls />
            </ReactFlow>
        </div>
    )
}
