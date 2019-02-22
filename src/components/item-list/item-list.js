import React from 'react';
import PropTypes from 'prop-types';

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

ItemList.defaultProps = {
    onItemSelect: () => {}
};

ItemList.propTypes = {
    onItemSelect: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired
};

export default ItemList;