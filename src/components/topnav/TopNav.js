import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
const Topnav = () => {
	return (
		<div className='topnav'>
			<div className='topnav__search'>
				<input
					type='text'
					name=''
					id=''
					placeholder='Search here ...'
				/>
				<i className='bx bx-search'></i>
			</div>
			<div className='topnav__right'>
				<div className='topnav__right-item'>
					<Dropdown />
				</div>
				<div className='topnav__right-item'>
					<Dropdown />
				</div>
				<div className='topnav__right-item'>
					<Dropdown />
				</div>
			</div>
		</div>
	)
}

export default Topnav
