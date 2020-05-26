import React from 'react';

export default function List({ items, renderItem }) {
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>
                    {renderItem(item)}
                </li>
            ))}
        </ul>
    );
}