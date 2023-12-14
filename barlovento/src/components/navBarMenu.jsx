import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { dataMenues } from '../utils/data'

export function NavBar() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 150,
		slidesToShow: 4,
		slidesToScroll: 1,
		arrows: false,
	}

	return (
		<Slider {...settings}>
			{dataMenues.map(menuItem => (
				<div key={menuItem.id} className="flex justify-around gap-4 menu-slide">
					<h2>{menuItem.title}</h2>
				</div>
			))}
		</Slider>
	)
}
