import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { dataMenues } from '../utils/data'
import { Tab } from '@headlessui/react'

export function NavBar() {
	const [activeTab, setActiveTab] = useState(0)
	const [scrollPosition, setScrollPosition] = useState(0)
	const navRef = useRef(null)

	const settings = {
		dots: false,
		infinite: false,
		speed: 100,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows: false,
	}

	const handleTabClick = index => {
		setActiveTab(index)
		scrollToSection(index)
	}

	const handleScroll = () => {
		if (navRef.current) {
			setScrollPosition(navRef.current.getBoundingClientRect().top)
		}
	}

	const scrollToSection = index => {
		const sectionId = dataMenues[index]?.id

		if (sectionId) {
			const sectionElement = document.getElementById(sectionId)

			if (sectionElement) {
				const yOffset = -50 // Ajusta este valor según tus necesidades
				const y = sectionElement.offsetTop + yOffset

				window.scrollTo({ top: y, behavior: 'smooth' })
			}
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [])

	return (
	<Slider {...settings} className={`sticky top-0 z-10 bg-white shadow-md py-3.5 ${scrollPosition < 0 ? 'border-b-2 border-[#ff5023]' : ''}`} ref={navRef}>
		{dataMenues.map((menuItem, index) => (
        <div key={menuItem.id} className="flex  justify-center text-center ">
        	<Tab.Group>
			<Tab.List
		onClick={() => handleTabClick(index)}
		className={`w-full overflow-x-auto text-sm py-2 px-1 ${
    activeTab === index ? ' border-b-2 border-[#ff5023]' : ''
  }`}
>
        			<Tab >
        				<strong><a  href={`#${menuItem.id}`}>{menuItem.title}</a></strong>
        			</Tab>
            	</Tab.List>
        	</Tab.Group>
        </div>
    ))}
    </Slider>
	)
}
