import React from 'react';

export default function Modal(props) {

	function checkBackspace(event) {
		if ((event.key === 'Backspace' && event.target.nodeName !== 'INPUT') || event.key === 'Escape') {
			event.preventDefault();
			props.onSwitchEditing(false);
		}
	}

	return (
		<>
			<div
				className={props.name + '-modal-bg modal-bg'}
				onClick={() => props.onSwitchEditing(false)}
			>
			</div>
			<div
				className={props.name + '-modal modal'}
				tabIndex='0'
				onKeyDown={checkBackspace}
			>
				{props.modal}
			</div>
		</>
	)
}
