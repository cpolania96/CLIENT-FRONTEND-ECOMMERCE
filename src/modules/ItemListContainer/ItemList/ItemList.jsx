import React from 'react';
import Item from '../Item/Item';


function ItemList({ items }) {
    return (
        items.map(items => <Item item={items} />)
    )
}

export default ItemList;
