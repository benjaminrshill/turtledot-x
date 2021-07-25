import React, { useState } from 'react';
import { days } from '../../../../static/colorsDays';
import './dayModal.css';

export default function DayModal(props) {

	const [whichDay, setDay] = useState(getDay());
	// const items = useState(getItems());

	// function doIt() {
	// 	props.selected.forEach(item => item.times = [null, null, null, null, null, null, null]);
	// }
	// doIt();

	// function getItems() {
	// 	props.selected.forEach((item, index) => {
	// 		if (item.todo[props.index] > -1) {
	// 			item.times[index] = 0;
	// 		}
	// 	});
	// }

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

			</div>
		</>
	)
}
