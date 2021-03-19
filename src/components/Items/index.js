import React, {useState} from 'react';
import Item from './Item';
import UpdateItem from './UpdateItem';
import getStoredItems from '../../functions/getStoredItems';
import {colorsDays} from '../../static/colorsDays';
import './items.css';
import {v4 as uuidv4} from 'uuid';
import {Plus} from 'react-feather';

export default function Items() {

    const [items, editItems] = useState(getStoredItems());
    const [adding, switchAdding] = useState(false);

    function addItem(data) {
        let item = {
            id: uuidv4(),
            text: data.text,
            type: data.type,
            number: data.number,
            color: data.color
        };
        let newItems = [...items];
        newItems.push(item);
        localStorage.setItem('items', JSON.stringify(newItems));
        editItems([...newItems]);
    }

    function deleteItem(event) {
        if (window.confirm('Really delete?')) {
            let newItems = [...items];
            let filtered = newItems.filter(item => item.id !== event.target.value);
            localStorage.setItem('items', JSON.stringify(filtered));
            editItems([...filtered]);
        }
    }

    return (
        <main id='items'>
            <h1>
                Items
            </h1>
            {items.map(item =>
                <Item
                    key={item.id}
                    item={item}
                    colors={colorsDays}
                    currentlyAdding={adding}
                    onDeleteItem={deleteItem}
                    onCancelNewItem={() => switchAdding(false)}
                />
            )}
            {adding ?
                <UpdateItem
                    colors={colorsDays}
                    onUpdateItem={addItem}
                    onCancelUpdate={() => switchAdding(false)}
                />
                :
                <button
                    onClick={() => switchAdding(true)}
                    className='plus-sign add'>
                    <Plus size={18} />
                </button>
            }
        </main>
    );
}
