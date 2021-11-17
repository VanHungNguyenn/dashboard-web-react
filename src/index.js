import React from 'react'
import ReactDOM from 'react-dom'
import './assets/css/grid.css'
import './assets/css/theme.css'
import './assets/css/index.css'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import Layout from './components/layout/Layout'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './redux/reducers'

const store = createStore(rootReducer)

document.title = 'VanHung Dashboard'

ReactDOM.render(
	<Provider store={store}>
		<React.StrictMode>
			<Layout />
		</React.StrictMode>
	</Provider>,
	document.getElementById('root')
)
