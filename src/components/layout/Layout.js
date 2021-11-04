import React from 'react'

import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'
import './layout.css'

import { BrowserRouter, Route } from 'react-router-dom'

const Layout = () => {
	return (
		<BrowserRouter>
			<Route
				render={(props) => (
					<div className='layout'>
						<Sidebar {...props} />
						<div className='layout__content'>
							<TopNav />
							<div className='layout__content-main'>
								<Routes />
							</div>
						</div>
					</div>
				)}
			></Route>
		</BrowserRouter>
	)
}

export default Layout
