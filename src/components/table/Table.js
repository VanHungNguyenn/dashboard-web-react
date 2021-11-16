import React from 'react'
import './table.css'

const Table = (props) => {
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
							{props.bodyData.map((item, i) => {
								return props.renderBody(item, i)
							})}
						</tbody>
					) : null}
				</table>
			</div>
		</div>
	)
}

export default Table
