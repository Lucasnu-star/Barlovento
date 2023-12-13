

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const dataMenues = [{ 
    id:1,
    menu:"Sandwiches",
    
},
{ 
    id:2,
    menu:"Hamburguesas",

},
{ 
    id:3,
    menu:"Milanesas",

},
{ 
    id:4,
    menu:"Pizzas",
},
{ 
    id:5,
    menu:"Tapeos",
},
{ 
    id:6,
    menu:"Empanadas",
},
{ 
    id:7,
    menu:"Ensaladas",
},
{ 
    id:8,
    menu:"Carnes",
},
{ 
    id:9,
    menu:"Pastas",
},
{ 
    id:10,
    menu:"Pescados",
},
{ 
    id:12,
    menu:"Infusiones",
},
{ 
    id:13,
    menu:"Desayunos",
},
{ 
    id:14,
    menu:"Jugos/Licuados",
},
{ 
    id:15,
    menu:"Postres",
},
{ 
    id:16,
    menu:"Panaderia",
},
{ 
    id:17,
    menu:"Bebidas",
},
{ 
    id:18,
    menu:"Vinos",
},
{ 
    id:19,
    menu:"Tragos",
}
]


   


export function NavBar() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 150,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: false,
    };
  
    return (
      <Slider {...settings}>
        {dataMenues.map((menuItem) => (
          <div key={menuItem.id} className='menu-slide'>
            <h2>{menuItem.menu}</h2>
          </div>
        ))}
      </Slider>
    );
  }