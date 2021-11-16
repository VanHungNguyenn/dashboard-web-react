import React from 'react'
import statusCards from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'
import Chart from 'react-apexcharts'
import { Link } from 'react-router-dom'
import Table from '../components/table/Table'
import customers from '../assets/JsonData/top-customers.json'
import orders from '../assets/JsonData/top-orders.json'
import Badge from '../components/badge/Badge'

const chartOptions = {
	series: [
		{
			name: 'Online Customers',
			data: [40, 70, 20, 90, 36, 80, 30, 91, 60],
		},
		{
			name: 'Store Customers',
			data: [40, 30, 70, 80, 40, 16, 40, 20, 51],
		},
	],
	options: {
		color: ['#6ab04c', '#2980b9'],
		chart: {
			background: 'transparent',
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		xaxis: {
			categories: [
				'Jan',
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
			],
		},
		legend: {
			position: 'top',
		},
		grid: {
			show: false,
		},
	},
}

const topCustomers = {
	head: ['user', 'total orders', 'total spending'],
	body: customers,
}

const renderCustomerHead = (item, i) => {
	return <th key={i}>{item}</th>
}

const renderCustomerBody = (item, i) => {
	return (
		<tr key={i}>
			<td>{item.username}</td>
			<td>{item.order}</td>
			<td>{item.price}</td>
		</tr>
	)
}

const latestOrder = {
	head: ['order id', 'user', 'total price', 'date', 'status'],
	body: orders,
}

console.log(latestOrder.body)

const orderStatus = {
	shipping: 'primary',
	pending: 'warning',
	paid: 'success',
	refund: 'danger',
}

const renderOrderHead = (item, i) => {
	return <th key={i}>{item}</th>
}

const renderOrderBody = (item, i) => {
	return (
		<tr key={i}>
			<td>{item.id}</td>
			<td>{item.user}</td>
			<td>{item.total_price}</td>
			<td>{item.date}</td>
			<td>
				<Badge type={orderStatus[item.status]} content={item.status} />
			</td>
		</tr>
	)
}

const Dashboard = () => {
	return (
		<div>
			<h2 className='page-header'>Dashboard</h2>
			<div className='row'>
				<div className='col-6 col-md-12'>
					<div className='row'>
						{statusCards.map((item, i) => {
							return (
								<div key={i} className='col-6 col-sm-12'>
									{/* status card here */}
									<StatusCard
										icon={item.icon}
										count={item.count}
										title={item.title}
									/>
								</div>
							)
						})}
					</div>
				</div>
				<div className='col-6 col-md-12'>
					<div className='card full-height'>
						{/* chart here */}
						<Chart
							options={chartOptions.options}
							series={chartOptions.series}
							type='line'
							height='100%'
						/>
					</div>
				</div>
				<div className='col-4 col-md-12'>
					<div className='card'>
						<div className='card__header'>
							<h3>Top Customers</h3>
						</div>
						<div className='card__body'>
							{/* table here */}
							<Table
								headData={topCustomers.head}
								renderHead={(item, i) =>
									renderCustomerHead(item, i)
								}
								bodyData={topCustomers.body}
								renderBody={(item, i) =>
									renderCustomerBody(item, i)
								}
							/>
						</div>
						<div className='card__footer'>
							<Link to='/'>View All</Link>
						</div>
					</div>
				</div>
				<div className='col-8 col-md-12'>
					<div className='card'>
						<div className='card__header'>
							<h3>Latest orders</h3>
						</div>
						<div className='card__body'>
							<Table
								headData={latestOrder.head}
								renderHead={(item, i) =>
									renderOrderHead(item, i)
								}
								bodyData={latestOrder.body}
								renderBody={(item, i) =>
									renderOrderBody(item, i)
								}
							/>
						</div>
						<div className='card__footer'>
							<Link to='/'>View All</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
