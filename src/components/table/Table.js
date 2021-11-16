import React, { useState } from 'react'
import './table.css'

const Table = (props) => {
	const initDataShow =
		props.limit && props.bodyData
			? props.bodyData.slice(0, Number(props.limit))
			: props.bodyData

	const [dataShow, setDataShow] = useState(initDataShow)

	let pages = 1

	let range = []

	if (props.limit !== undefined) {
		let page = Math.floor(props.bodyData.length / Number(props.limit))
		pages =
			props.bodyData.length % Number(props.limit) === 0 ? page : page + 1

		range = [...Array(pages).keys()]
	}

	return (
		<div>
			<div className='table-wrapper'>
				<table>
					{props.headData && props.renderHead ? (
						<thead>
							<tr>
								{props.headData.map((item, i) => {
									return props.renderHead(item, i)
								})}
							</tr>
						</thead>
					) : null}
					{props.bodyData && props.renderBody ? (
						<tbody>
							{dataShow.map((item, i) => {
								return props.renderBody(item, i)
							})}
						</tbody>
					) : null}
				</table>
			</div>
			{pages > 1 ? (
				<div className='table__pagination'>
					{range.map((item, i) => {
						return (
							<div key={i} className={`table__pagination-item`}>
								{item + 1}
							</div>
						)
					})}
				</div>
			) : null}
		</div>
	)
}

export default Table
