import React, { useState, useEffect } from 'react';

export default function Modal(props) {

	const [show, switchShow] = useState(false);

	useEffect(() => {
		setTimeout(() => switchShow(true), 10);
	}, []);

	function checkBackspace(event) {
		if ((event.key === 'Backspace' && event.target.nodeName !== 'INPUT') || event.key === 'Escape') {
			event.preventDefault();
			props.onToggleModal(false);
		}
	}

	return (
		<>
			<div
				className={props.name + '-modal-bg modal-bg' + (show ? ' show' : '')}
				onClick={() => props.onToggleModal(false)}
			>
			</div>
			<div
				className={props.name + '-modal modal' + (show ? ' show' : '')}
				tabIndex='0'
				onKeyDown={checkBackspace}
			>
				{props.modal}
			</div>
		</>
	)
}
