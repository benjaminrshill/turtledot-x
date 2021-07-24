import React, { useState } from 'react';
import { days } from '../../../../static/colorsDays';
import './dayModal.css';

export default function DayModal(props) {

	const [whichDay, setDay] = useState(getDay());

	function getDay() {
		if (props.isThisWeek) {
			switch(props.index) {
				case props.today:
					return 'today';
				case props.today - 1:
					return 'yesterday';
				case props.today + 1:
					return 'tomorrow';
				default:
					return days[props.index];
			}
		}
	}
	
	return (
		<>
			<h2>Here we shall be able to view and edit information about the selected day</h2>

			<div
				className='whichDay'
			>
				{whichDay}
			</div>

			<div className='items'>
				{props.selected.map(item =>
					item.todo[props.index] > -1 &&
					<div className='item'>
						{item.name}
					</div>
				)}
			</div>
		</>
	)
}
