const dataMenuesIndex = [{ 
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

export function Cards ({children}) {
  return (
    <section className='cardsFather'>
    {dataMenuesIndex.map((menuestItems)=>(
    <div className='cards'>
        <h2>{menuestItems.menu}</h2>
            <div key={menuestItems.id} className="children">
                {children}
            </div> 
    </div>
    ))}
</section>
    
  )
}
