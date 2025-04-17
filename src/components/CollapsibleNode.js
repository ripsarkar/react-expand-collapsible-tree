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


export default CollapsibleNode;