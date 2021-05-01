import React from 'react';
import {Maximize2, Trash, Trash2, X} from 'react-feather';

export default function ActionsPanel(props) {

    return (
        <div className='actions-panel'>
            <span>
                <input
                    type='checkbox'
                    id={'delete-items' + props.weekBeginning}
                    onChange={() => !props.shifting && props.onSwitchDeleting(!props.deleting)}
                />
                <label htmlFor={'delete-items' + props.weekBeginning}>
                    {props.deleting ?
                        <Trash2 size={16}/>
                        :
                        <Trash size={16}/>
                    }
                </label>
            </span>
            <span>
                <input
                    type='checkbox'
                    id={'shift-items' + props.weekBeginning}
                    onChange={() => !props.deleting && props.onSwitchShifting(!props.shifting)}
                />
                <label htmlFor={'shift-items' + props.weekBeginning}>
                    {props.shifting ?
                        <X size={16}/>
                        :
                        <Maximize2 size={14} className='deg45'/>
                    }
                </label>
            </span>
        </div>
    )
}