import React, { useState } from 'react';

const CollapsibleNode = ({ node }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleChildren = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            <div onClick={toggleChildren} style={{ cursor: 'pointer' }}>
                {node.children && (
                <span>{isVisible ? '−' : '+'}</span>
                )}
                {node.label}
            </div>
            {isVisible && node.children && (
                <div style={{ paddingLeft: '20px' }}>
                    {node.children.map((childNode, index) => (
                        <CollapsibleNode key={index} node={childNode} />
                    ))}
                </div>
            )}
        </div>
    );
};

const CollapsibleTree = ({ data }) => {
    return (
        <div>
            {data.map((node, index) => (
                <CollapsibleNode key={index} node={node} />
            ))}
        </div>
    );
};

export default CollapsibleTree;