import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notification from '../../assets/JsonData/notification.json'

const renderNotificationItem = (item, index) => {
	return (
		<div className='notification-item' key={index}>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	)
}

const TopNav = () => {
	return (
		<div className='topnav'>
			<div className='topnav__search'>
				<input type='text' placeholder='Search here...' />
				<i className='bx bx-search'></i>
			</div>
			<div className='topnav__right'>
				<div className='topnav__right-item'>
					<Dropdown icon='bx bx-user' />
				</div>
				<div className='topnav__right-item'>
					<Dropdown
						icon='bx bx-bell'
						badge='12'
						contentData={notification}
						renderItems={(item, i) =>
							renderNotificationItem(item, i)
						}
					/>
				</div>
				<div className='topnav__right-item'>
					<Dropdown />
				</div>
			</div>
		</div>
	)
}

export default TopNav
