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
		infinite: true,
		speed: 150,
		slidesToShow: 4,
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
		<Slider {...settings} className={`sticky top-0 z-10 bg-white shadow-lg py-2 ${scrollPosition < 0 ? 'bg-red-800' : ''}`} ref={navRef}>
			{dataMenues.map((menuItem, index) => (
				<div key={menuItem.id} className="flex gap-6 justify-center text-center box-border">
					<Tab.Group>
						<Tab.List>
							<Tab onClick={() => handleTabClick(index)} className={`mx-6 px-5 ${activeTab === index ? 'bg-red-800' : ''}`}>
								<a href={`#${menuItem.id}`}>{menuItem.title}</a>
							</Tab>
						</Tab.List>
					</Tab.Group>
				</div>
			))}
		</Slider>
	)
}
