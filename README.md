# Getting Started with Create React App

This is UI plugin for react for any level expand collapse tree creation

## First Install the plugin

To install the plugin, you can run:

### `npm install react-expand-collapsible-tree --save-dev`


Add [<ExpandCollapsibleTree />](<ExpandCollapsibleTree treeData={YourTreeData}/>) to your component.

Pass your tree array in the treeData prop

### `Sample Array`

const treeData = [
    {
        label: 'Root 1',
        children: [
            { label: 'Child 1.1' },
            { label: 'Child 1.2', children: [{ label: 'Grandchild 1.2.1' }] },
        ],
    },
    {
        label: 'Root 2',
        children: [
            { label: 'Child 2.1' },
            { label: 'Child 2.2' },
        ],
    },
];

**Note: CSS part of this tree is kept very basic to give the developer freedom to design as per individual project theme!**
