import React, { useEffect, useRef, useState } from 'react'
import './theme-menu.css'
import { useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

const mode_settings = [
	{
		id: 'light',
		name: 'Light',
		background: 'light-background',
		class: 'theme-mode-light',
	},
	{
		id: 'dark',
		name: 'Dark',
		background: 'dark-background',
		class: 'theme-mode-dark',
	},
]

const color_settings = [
	{
		id: 'blue',
		name: 'Blue',
		background: 'blue-color',
		class: 'theme-color-blue',
	},
	{
		id: 'red',
		name: 'Red',
		background: 'red-color',
		class: 'theme-color-red',
	},
	{
		id: 'cyan',
		name: 'Cyan',
		background: 'cyan-color',
		class: 'theme-color-cyan',
	},
	{
		id: 'orange',
		name: 'Orange',
		background: 'orange-color',
		class: 'theme-color-orange',
	},
	{
		id: 'green',
		name: 'Green',
		background: 'green-color',
		class: 'theme-color-green',
	},
]

const clickOutsideRef = (content_ref, toggle_ref) => {
	document.addEventListener('mousedown', (e) => {
		// use click toggle
		if (toggle_ref.current && toggle_ref.current.contains(e.target)) {
			content_ref.current.classList.toggle('active')
		} else {
			// user click outside toggle and content
			if (
				content_ref.current &&
				!content_ref.current.contains(e.target)
			) {
				content_ref.current.classList.remove('active')
			}
		}
	})
}

const Thememenu = () => {
	const menuRef = useRef(null)
	const menuToggleRef = useRef(null)

	clickOutsideRef(menuRef, menuToggleRef)

	const setActiveMenu = () => menuRef.current.classList.add('active')
	const closeMenu = () => menuRef.current.classList.remove('active')

	const [currMode, setCurrMode] = useState('light')
	const [currColor, setCurrColor] = useState('blue')

	const dispatch = useDispatch()

	const setMode = (mode) => {
		setCurrMode(mode.id)
		localStorage.setItem('themeMode', mode.class)
		dispatch(ThemeAction.setMode(mode.class))
	}

	const setColor = (color) => {
		setCurrColor(color.id)
		localStorage.setItem('themeColor', color.class)
		dispatch(ThemeAction.setColor(color.class))
	}

	useEffect(() => {
		const themeClass = mode_settings.find(
			(e) =>
				e.class ===
				localStorage.getItem('themeMode', 'theme-mode-light')
		)
		const colorClass = color_settings.find(
			(e) =>
				e.class ===
				localStorage.getItem('colorMode', 'theme-color-blue')
		)

		if (themeClass !== undefined) {
			setCurrMode(themeClass.id)
		}
		if (colorClass !== undefined) {
			setCurrColor(colorClass.id)
		}
	}, [])

	return (
		<div>
			<button
				className='dropdown__toggle'
				onClick={() => setActiveMenu()}
				ref={menuToggleRef}
			>
				<i className='bx bx-palette'></i>
			</button>
			<div className='theme-menu' ref={menuRef}>
				<h4>Theme settings</h4>
				<button
					className='theme-menu__close'
					onClick={() => closeMenu()}
				>
					<i className='bx bx-x'></i>
				</button>
				<div className='theme-menu__select'>
					<span>Choose mode</span>
					<ul className='mode-list'>
						{mode_settings.map((item, i) => {
							return (
								<li key={i} onClick={() => setMode(item)}>
									<div
										className={`mode-list__color ${
											item.background
										}
										${item.id === currMode ? 'active' : ''}	
									`}
									>
										<i className='bx bx-check'></i>
									</div>
									<span>{item.name}</span>
								</li>
							)
						})}
					</ul>
				</div>
				<div className='theme-menu__select'>
					<span>Choose color</span>
					<ul className='mode-list'>
						{color_settings.map((item, i) => {
							return (
								<li key={i} onClick={() => setColor(item)}>
									<div
										className={`mode-list__color ${
											item.background
										} ${
											item.id === currColor
												? 'active'
												: ''
										}	`}
									>
										<i className='bx bx-check'></i>
									</div>
									<span>{item.name}</span>
								</li>
							)
						})}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Thememenu
