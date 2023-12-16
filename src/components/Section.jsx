import React from 'react'
import { dataMenues } from '../utils/data'
import { Cards } from './cards'

function Section() {
	return (
		<div className="flex flex-col w-full">
			{dataMenues.map(menu => (
				<div key={menu.id} className="text-2xl my-3 scroll-mt-16" id={menu.id}>
					<h1 className=" w-fit mx-6">{menu.title}</h1>
					<h3 className="text-sm text-gray-500 mb-5 px-6">{menu?.subTitle}</h3>
					{menu?.items?.map((item, index) => (
						<Cards
							key={index}
							title={item?.nombre}
							img={item?.img}
							price={item.precio}
							priceDuo={item?.precioCompartir}
							description={item.description}
						/>
					))}
				</div>
			))}
		</div>
	)
}

export default Section
