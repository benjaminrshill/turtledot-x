import React, {useState} from 'react';
import validateItem from '../../../functions/validateItem';
import '../../Arrange/';
import {X, Check} from 'react-feather';

export default function UpdateItem(props) {

    const itemToPlay = props.item ? {...props.item} :
        {
            id: '',
            text: '',
            type: true,
            number: 1,
            color: 'color0'
        };

    const [item, editItem] = useState(itemToPlay);

    function checkKey(event) {
        if (event.key === 'Enter') updateItem();
    }

    function handleInput(event) {
        let newItem = {...item};
        newItem[event.target.name] = event.target.value;
        editItem({...newItem});
    }

    function switchType() {
        let newItem = {...item};
        newItem.type = !newItem.type;
        editItem({...newItem});
    }

    function updateItem() {
        if (validateItem(item)) {
            props.onUpdateItem({...item});
            editItem({
                id: '',
                text: '',
                type: true,
                number: 1,
                color: 'color0'
            });
        }
    }

    return (
        <section>
            <div className='item'>
                <input
                    type='text'
                    name='text'
                    value={item.text}
                    onChange={handleInput}
                    onKeyDown={event => checkKey(event)}
                    className='text'
                />
                <button
                    name='type'
                    value={item.type}
                    onClick={switchType}
                    className='type'>
                    {item.type ?
                        <div className='day spot open'>
                        </div>
                        :
                        '#'
                    }
                </button>
                <input
                    type='number'
                    name='number'
                    min='1'
                    max='99999'
                    value={item.number}
                    onChange={handleInput}
                    onKeyDown={event => checkKey(event)}
                    className='number'
                />
                <button
                    className={'color ' + item.color}>
                </button>
                <button
                    onClick={props.onCancelUpdate}
                    className='plus-sign'>
                    <X size={16} />
                </button>
            </div>
            <div className='edit-box'>
                <div className='palette'>
                    {props.colors.map(color =>
                        <button
                            key={color}
                            name='color'
                            value={color}
                            onClick={handleInput}
                            className={'palette-square ' + color}>
                        </button>
                    )}
                </div>
                <div className='edit-box-buttons'>
                    <button
                        onClick={updateItem}
                        className='edit-complete'>
                        <Check size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
