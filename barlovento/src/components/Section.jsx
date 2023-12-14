import React from 'react'
import { dataMenues } from '../utils/data'
import { Cards } from './cards'

function Section() {
	return (
		<div className="flex flex-col w-full">
			{dataMenues.map(menu => (
				<div key={menu.id} className="text-2xl font-bold my-5 px-5">
					<h1 className="my-5">{menu.title}</h1>
					{menu?.items?.map((item, index) => (
						<Cards key={index} title={item.nombre} price={item.precio} description={item.description} />
					))}
				</div>
			))}
		</div>
	)
}

export default Section
