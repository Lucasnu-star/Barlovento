import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MyComponent = () => {
  useEffect(() => {
    // Inicializa AOS en el efecto de montaje del componente
    AOS.init();
  }, []);

  return (
    <section className="flex flex-col justify-between h-screen ">
     
      <img  className=""  src="./arribaabajo.png" alt="" />
      

      
      <img  className="" data-aos="zoom-in" data-aos-duration="2000" src="./barlovento.png" alt="" />
      
      
      <img className="" data-aos="zoom-in" data-aos-duration="2000" src="./laboca.png" alt="" />
      
      
      <img className="" data-aos="zoom-in" data-aos-duration="2000" src="./redes.png" alt="" />
      
     
      <img      className=" rotate-180" src="./arribaabajo.png" alt="" />
      
    </section>
  );
};

export default MyComponent;
