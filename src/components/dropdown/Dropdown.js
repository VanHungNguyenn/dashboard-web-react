import React from 'react'
import './dropdown.css'

const Dropdown = (props) => {
	const {
		icon,
		badge,
		customToggle,
		contentData,
		renderItems,
		renderFooter,
	} = props

	return (
		<div className='dropdown'>
			<button className='dropdown__toggle'>
				{icon ? <i className={icon}></i> : ''}
				{badge ? (
					<span className='dropdown__toggle-badge'>{badge}</span>
				) : (
					''
				)}
				{customToggle ? customToggle() : ''}
			</button>
			<div className='dropdown__content'>
				{contentData && renderItems
					? contentData.map((item, i) => renderItems(item, i))
					: ''}
				{renderFooter ? (
					<div className='dropdown__footer'>{renderFooter()}</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default Dropdown
