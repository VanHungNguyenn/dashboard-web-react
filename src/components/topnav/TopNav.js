import React from 'react'
import Dropdown from '../dropdown/Dropdown'
import './topnav.css'
import notification from '../../assets/JsonData/notification.json'
import { Link } from 'react-router-dom'
import userImage from '../../assets/images/hung.jpg'
import user_menu from '../../assets/JsonData/user_menus.json'

const curr_user = {
	display_name: 'Van Hung',
	image: userImage,
}

const renderNotificationItem = (item, index) => {
	return (
		<div className='notification-item' key={index}>
			<i className={item.icon}></i>
			<span>{item.content}</span>
		</div>
	)
}

const renderUserToggle = (user) => {
	return (
		<div className='topnav__right-user'>
			<div className='topnav__right-user__image'>
				<img src={user.image} alt='user' />
			</div>
			<div className='topnav__right-user__name'>{user.display_name}</div>
		</div>
	)
}

const renderUserMenu = (item, index) => {
	return (
		<Link to='/' key={index}>
			<div className='notification-item'>
				<i className={item.icon}></i>
				<span>{item.content}</span>
			</div>
		</Link>
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
					<Dropdown
						customToggle={() => renderUserToggle(curr_user)}
						contentData={user_menu}
						renderItems={(item, i) => renderUserMenu(item, i)}
					/>
				</div>
				<div className='topnav__right-item'>
					<Dropdown
						icon='bx bx-bell'
						badge='12'
						contentData={notification}
						renderItems={(item, i) =>
							renderNotificationItem(item, i)
						}
						renderFooter={() => <Link to='/'>View All</Link>}
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
