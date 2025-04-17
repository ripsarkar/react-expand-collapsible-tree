import React from 'react';
import CollapsibleTree from './components/CollapsibleTree';

// const treeData = [
//     {
//         label: 'Root 1',
//         children: [
//             { label: 'Child 1.1' },
//             { label: 'Child 1.2', children: [{ label: 'Grandchild 1.2.1' }] },
//         ],
//     },
//     {
//         label: 'Root 2',
//         children: [
//             { label: 'Child 2.1' },
//             { label: 'Child 2.2' },
//         ],
//     },
// ];

const ExpandCollapsibleTree = ({treeData}) => {
    return (
        <div>
            <h1>Collapsible Tree Example</h1>
            <CollapsibleTree data={treeData} />
        </div>
    );
};

export default ExpandCollapsibleTree;