import React from 'react'
import { dataMenues } from '../utils/data'
import { Cards } from './cards'

function Section() {
	return (
		<div className="flex flex-col w-full">
			{dataMenues.map(menu => (
				<div key={menu.id} className="text-2xl font-bold my-5 px-5">
					<h1 className="my-3">{menu.title}</h1>
					<h3 className='text-lg text-gray-500 mb-3 '>{menu?.subTitle}</h3>
					{menu?.items?.map((item, index) => (
						<Cards key={index} title={item?.nombre} img={item?.img} price={item.precio} priceDuo={item?.precioCompartir}  description={item.description} />
					))}
					
				</div>
			))}
		</div>
	)
}

export default Section
