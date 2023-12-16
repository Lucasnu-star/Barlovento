import React from 'react'
import { dataMenues } from '../utils/data'
import { Cards } from './cards'

function Section() {
	return (
		<div className="flex flex-col w-full">
			{dataMenues.map(menu => (
				<div key={menu.id} className="text-2xl my-3 scroll-mt-20" id={menu.id}>
					<h1 className=" w-fit mx-6">{menu.title}</h1>
					<h3 className="text-sm text-gray-500 mb-5 px-6">{menu?.subTitle}</h3>
					<div className="md:grid 2xl:grid-cols-4 2xl:gap-10 md:gap-5 2xl:px-5 2xl:gap-y-5 xl:grid-cols-3 sm:grid-cols-2">
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
				</div>
			))}
		</div>
	)
}

export default Section
