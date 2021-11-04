import React from 'react'

const Dropdown = (props) => {
	return (
		<div className='dropdown'>
			<button className='dropdown__toggle'>
				{props.icon ? <i className={props.icon}></i> : ''}
			</button>
		</div>
	)
}

export default Dropdown
