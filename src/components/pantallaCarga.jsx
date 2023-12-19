import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const MyComponent = () => {
  useEffect(() => {
    // Inicializa AOS en el efecto de montaje del componente
    AOS.init();
  }, []);

  return (
    <div className="flex items-center justify-center h-screen relative">
     
      <img  className="absolute top-0 left-1/2 transform -translate-x-1/2" src="./arribaabajo.png" alt="" />

      
      <img  className="absolute top-1/3 left-1/2 transform -translate-x-1/2" src="./barlovento.png" alt="" />

      
      <img className="absolute top-1/2 left-1/2 transform -translate-x-1/2" src="./laboca.png" alt="" />

      <img className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2" src="./redes.png" alt="" />

     
      <img    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 rotate-180" src="./arribaabajo.png" alt="" />
     
    </div>
  );
};

export default MyComponent;
