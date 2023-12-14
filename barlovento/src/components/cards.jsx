export function Cards({ title, img, price, description }) {
	return (
		<section className="w-full mb-6 p-5 flex flex-col justify-center shadow-md rounded-lg bg-white">
			{/* <div className="">
				<img src={img} alt="" className="w-[200px] h-auto object-cover" />
			</div> */}
			<div className="flex flex-col">
				<h3 className="text-lg font-bold mb-1">{title}</h3>
				<p className="text-xs text-[#757575]">{description}</p>
				<span className="border w-fit px-6 p-1 border-[#f95129] rounded-lg bg-transparent text-[#f95129] text-xs mt-2 font-bold">
					${price}
				</span>
			</div>
		</section>
	)
}
