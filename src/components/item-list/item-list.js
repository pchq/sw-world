import React, {Component} from 'react';

import './item-list.css';

const ItemList = (props) => {
    const {data, children, onItemSelect} = props;
    const itemList = data.map((item) => {
        const {id} = item;
        const label = children(item);
        return (
            <li
                className="list-group-item"
                key={id}
                onClick={() => onItemSelect(id)}
            >
                {label}
            </li>
        )
    });

    return (
        <ul className="item-list list-group">
            {itemList}
        </ul>
    );
};

export default ItemList;