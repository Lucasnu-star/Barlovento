
import { Barlovento, NavBar } from './components'
import Section from './components/Section'
import React, { useState, useEffect } from 'react';
import PantallaCarga from './components/pantallaCarga';
import AOS from 'aos';
import 'aos/dist/aos.css';


const App = () => {
	const [isLoading, setIsLoading] = useState(true);
  
	useEffect(() => {
	  const timer = setTimeout(() => {
		setIsLoading(false);
	  }, 2500); 
  
	  return () => clearTimeout(timer); 
	}, []);
  
	if (isLoading) {
	  return <>
	  <PantallaCarga/>
	  
	  </>;
	}
  
	return (
		<section data-aos="zoom-out-down"
		data-aos-duration="1500">
		<Barlovento />
		<NavBar />
		<Section />
		</section>
	);
  };

export default App
