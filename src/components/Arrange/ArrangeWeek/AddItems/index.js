import React from 'react';
import './addItems.css';

export default function AddItems(props) {

	function addAll() {
		props.onAddAllItemsToWeek();
		props.onToggleModal(false);
	}

	function addOne(event) {
		props.onAddItemToWeek(event);
		props.onToggleModal(false);
	}

	return (
		<>
			<h2>Add Items</h2>

			<button
				className='add-all-items'
				onClick={addAll}
			>
				add all items
			</button>

			<div className='items-list'>
				{props.unselected.map(item =>
					<button
						key={item.id + props.weekBeginning + 'u'}
						value={item.id}
						data-week={props.weekBeginning}
						className={'items-list-item ' + item.color}
						onClick={addOne}
					>
						{item.text}
					</button>
				)}
			</div>
		</>
	)
}
