import { BiDish } from "react-icons/bi";


export function Cards({ title, img, price, priceDuo, description }) {
	return (
		<section className="w-full mb-6 p-5 grid items-center grid-cols-[70%_1fr] gap-5 shadow-md rounded-lg bg-white ">
			
			<div className="flex flex-col">
				<h3 className="text-lg font-bold mb-1 ">{title}</h3>
				
				<p className="text-xs text-[#757575]">{description}</p>
				{price && (
  <span className="border w-fit px-6 p-1 border-[#f95129] rounded-lg bg-transparent text-[#f95129] text-xs mt-2 font-bold">
    ${price}
  </span>
)}

{priceDuo && (
  <span className="border w-fit px-6 p-1 border-[#f95129] rounded-lg bg-transparent text-[#f95129] text-xs mt-2 font-bold">
    ${priceDuo}
  </span>
)}
				
				
				
			</div>
			{ <div className="w-full flex justify-center border border-gray-400 rounded-lg ">
			< BiDish className="text-7xl text-[#757575]  " />
				
			</div> }
		</section>
	)
}
