import React, {useEffect, useState} from 'react';
import UpdateItem from '../UpdateItem';
import cutNumber from '../../../functions/cutNumber';
import validateItem from '../../../functions/validateItem';
import '../../../weeks.css';

export default function Item(props) {

    const [item, editItem] = useState(props.item);
    const [editing, switchEditing] = useState(false);
    const [inUse, switchInUse] = useState(false);

    useEffect(() => {
        checkInUse();
    });

    function startEdit() {
        switchEditing(true);
        props.onCancelNewItem();
    }

    function updateItem(data) {
        if (validateItem(data)) {
            let storedItems = JSON.parse(localStorage.getItem('items'));
            let edited = storedItems.findIndex(item => item.id === data.id);
            storedItems[edited] = data;
            localStorage.setItem('items', JSON.stringify(storedItems));
            editItem({...data});
            switchEditing(false);
        }
    }

    function checkInUse() {
        if (localStorage.getItem('weeks')) {
            const weeks = JSON.parse(localStorage.getItem('weeks'));
            weeks.forEach(week => {
                if (week.items.find((item) => item[0] === props.item.id)) switchInUse(true);
            });
        }
    }

    return (
        <div>
            {editing && !props.currentlyAdding ?
                <UpdateItem
                    item={item}
                    colors={props.colors}
                    onUpdateItem={updateItem}
                    onCancelUpdate={() => switchEditing(false)}
                />
                :
                <div className='item'>
                    <div
                        onClick={startEdit}
                        className='text'>
                        {item.text}
                    </div>
                    <button
                        onClick={startEdit}
                        className='type'>
                        {item.type ?
                            <div className='day spot open'>
                            </div>
                            :
                            '#'
                        }
                    </button>
                    <button
                        onClick={startEdit}
                        className='number'>
                        {cutNumber(item.number)}
                    </button>
                    <button
                        onClick={startEdit}
                        className={'color ' + item.color}>
                    </button>
                    <button
                        value={item.id}
                        disabled={inUse}
                        onClick={props.onDeleteItem}
                        className='plus-sign delete'>
                        +
                    </button>
                </div>
            }
        </div>
    );
}
