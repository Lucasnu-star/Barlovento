export const dataMenues = [
	{
		id: 1,
		title: 'Sandwiches',
		subTitle: 'Con papas o ensalada',
		// falta un subtitulo / SANDWICHES CALIENTES Y FRIOS

		items: [
			{
				nombre: 'Sandwich Clásico',
				precio: 4500,
				description: 'Sandwich de milanesa clásica. Sencillamente delicioso.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Sandwich Completo',
				precio: 5300,
				description: 'Sandwich de milanesa con jamón, queso, huevo a la plancha, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Sandwich La Boca',
				precio: 6000,
				description: 'Sandwich de milanesa con panceta crocante, cebolla caramelizada, cheddar, tomate y lechuga.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lomo Grillé Clásico',
				precio: 5500,
				description: 'Sandwich de lomo grille clásico, Sencillamente delicioso.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lomo Grillé Completo',
				precio: 6100,
				description: 'Sandwich de lomo grillé con jamon, queso, huevo a la plancha, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lomo Grillé "LA BOCA"',
				precio: 6600,
				description: 'Sandwich de lomo grillé con panceta crocante, cebolla caramelizada, cheddar, tomate y lechuga.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Vegetariano',
				precio: 4100,
				description: 'Sandwich vegetariano con queso dambo, huevo a la plancha, lechuga, tomate y palta.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Vegano',
				precio: 4500,
				description: 'Sandwich vegano con pepino, zanahoria, cebolla caramelizada, palta, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Jamón y Queso',
				precio: 3200,
				description: 'Sandwich de jamón y queso. Sencillamente delicioso.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Primavera',
				precio: 3200,
				description: 'Sandwich primavera con jamón, queso, huevo, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
		],
	},

	{
		id: 2,
		title: 'Hamburguesas',

		items: [
			{
				nombre: 'Hamburguesa Clásica',
				precio: 4100,
				description: 'Hamburguesa clásica con 120 gr de carne. Sencillamente delicioso.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Hamburguesa Completa',
				precio: 4800,
				description: 'Hamburguesa completa con 120 gr de carne, jamon, queso, huevo a la plancha, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Hamburguesa "LA BOCA"',
				precio: 5100,
				description: 'Hamburguesa la boca con 120 gr de carne, panceta crocante, cebolla caramelizada, cheddar, tomate y lechuga.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Hamburguesa Doble Reserva',
				precio: 6500,
				description:
					'Hamburguesa la boca con 240 gr de carne, doble panceta crocante, doble cheddar, doble cebolla caramelizada, doble huevo, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Veggie Clasica',
				precio: 4100,
				description: 'Hamburguesa veggie( medallón de arvejas, champiñones, espinaca, garbanzos, lentejas o quinoa).',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Veggie Completa',
				precio: 4800,
				description: 'Hamburguesa veggie completa con queso, huevo a la plancha, cebolla caramelizada, lechuga y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Extras',
				precio: 400,
				description: 'Jamón, queso, huevo, cebolla caramelizada, panceta, cheddar.',
			},
		],
	},
	{
		id: 3,
		title: 'Milanesas',
		subTitle: 'Para compartir, con papas fritas o ensaladas',
		items: [
			{
				nombre: 'Milanesa Clásica',
				precio: 4300,
				precioCompartir: 8500,
				description: 'Milanesa de ternera o suprema.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Milanesa Napolitana',
				precio: 4900,
				precioCompartir: 9700,
				description: 'Milanesa de ternera o suprema con jamon, queso muzarella, salsa de tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Milanesa a Caballo',
				precio: 4800,
				precioCompartir: 9500,
				description: 'Milanesa de ternera o suprema con 2 huevos fritos.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Milanesa Marchi',
				precio: 5600,
				precioCompartir: 11000,
				description: 'Milanesa de ternera o suprema con panceta crocante, cebolla caramelizada, cheddar, 2 huevos.',
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 4,
		title: 'Pizzas',
		items: [
			{
				nombre: 'Muzza',
				precio: 5000,
				description: 'Salsa de tomate, mozzarella y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Fugazzeta',
				precio: 5500,
				description: 'Cebolla, mozzarella y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Barlovento',
				precio: 6000,
				description: 'Salsa de tomate, queso azul, cebolla, mozzarella y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Especial',
				precio: 6000,
				description: 'Salsa de tomate, mozzarella, jamón  y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Portobello',
				precio: 6000,
				description: 'Salsa de tomate, mozzarella, parmesano, hongos, lluvia de ciboulette y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Portobello',
				precio: 6200,
				description: 'Salsa de tomate, mozzarella, parmesano, hongos, lluvia de ciboulette y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: '4 Quesos',
				precio: 6200,
				description: 'Salsa de tomate, mozzarella, queso azul, provolote, parmesano y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Pizza la Boca',
				precio: 6200,
				description: 'Salsa de tomate, mozzarella, panceta crocante, provoletta y orégano.',
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 5,
		title: 'Tapeos',
		items: [
			{
				nombre: 'Bocadillo de Espinaca',
				precio: 4100,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Patitas de pollo',
				precio: 3600,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Papas Fritas Barlovento',
				precio: 4800,
				description: 'Crema, panceta crocante, cebolla de verdeo.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Papas Fritas La Boca',
				precio: 4800,
				description: 'Cheddar, panceta crocante.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Papas Fritas Clásicas',
				precio: 4200,
				description: 'Salsa de tomate, mozzarella, parmesano, hongos, lluvia de ciboulette y orégano.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Rabas',
				precio: 8500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Fingers de Pescado',
				precio: 6400,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Gambas al Ajillo',
				precio: 10500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Gambas Empanadas',
				precio: 10500,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 6,
		title: 'Empanadas',
		subTitle: 'Fritas o al horno',
		items: [
			{
				nombre: 'Pollo',
				precio: 900,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Carne',
				precio: 900,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Jamon y Queso',
				precio: 900,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Queso y Roquefort',
				precio: 900,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 7,
		title: 'Ensaladas',
		items: [
			{
				nombre: 'Ensalada Barlovento',
				precio: 4200,
				description: 'Pechuga, salsa caesar, lechuga, tomate y croutons.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Ensalada La Boca',
				precio: 4200,
				description: 'Lechuga, rúcula, huevo duro, palta, parmesano y tomate.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Ensalada La Reserva',
				precio: 4200,
				description: 'Rúcula, pera, roquefort, tomate, zanahoria y croutons.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Arma Tu Ensalada',
				precio: 600,
				description: 'Lechuga, Tomate, Rúcula, Roquefort, Zanahoria, Croutons.',
			},
		],
	},
	{
		id: 8,
		title: 'Carnes',
		subTitle: 'Papas Fritas o ensalada',
		items: [
			{
				nombre: 'Bife De Chorizo',
				precio: 7000,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Bife Ancho',
				precio: 6600,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Asado Banderita',
				precio: 7000,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lomo Grille',
				precio: 7200,
				description: 'Dos Unidades.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Tabla Criolla',
				precio: 23000,
				description: '2 Empanadas de carne, bife de chorizo, lomo grille, bife ancho, berenjenas al escabeche y papas fritas.',
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 9,
		title: 'Pastas',
		items: [
			{
				nombre: 'Sorrentinos',
				precio: 3000,
				description: 'Jamón y Queso.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Ravioles',
				precio: 3000,
				description: 'Ravioles de verdura.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Salsas',

				precio: 1000,
				description: 'Fileto, Crema, Mixta.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Salsas',
				precio: 1800,
				description: 'Boloñesa, Champiñones a la crema, Roquefort a la crema.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Salsas Mediterranea',
				precio: 2500,
				description: 'Crema con Langostinos.',
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 10,
		title: 'Pescados',
		subTitle: 'Con papas fritas o ensalada',
		items: [
			{
				nombre: 'Merluza a la Romana',
				precio: 7300,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lenguado Grillé a la Parmegiana',
				precio: 8400,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Lenguado al Roquefort',

				precio: 8800,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Picada de Mar Individual',
				precio: 9000,
				img: '../../public/picadaMar.jpg',
			},
			{
				nombre: 'Picada de Mar para compartir',
				precio: 20200,
				description:
					'Rabas, cornalitos, langostinos apanados, calamares al escabeche, berenjenas en escabeche, fingers de merluza y papas fritas.',
				img: '../../public/picadaMar.jpg',
			},
		],
	},
	{
		id: 12,
		title: 'Menu Celiacos',
		subTitle: 'Menú Celiacos Consultar',
	},
	{
		id: 13,
		title: 'Infusiones',
		items: [
			{
				nombre: 'Café en Pocillo',
				precio: 900,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Cafe en Jarrito',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Cafe Doble',

				precio: 1500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Te',
				precio: 800,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Cappuccino',
				precio: 1700,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Submarino',
				precio: 1600,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Chocolatada',
				precio: 1500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Vaso de Leche',
				precio: 1000,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 14,
		title: 'Desayunos',
		items: [
			{
				nombre: 'Clásico',
				precio: 1750,
				description: 'Infusión + 2 Medialunas/Porción de budín.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'La Playa',
				precio: 3800,
				description: 'Infusión + Exprimido de naranja + Porcións de tostadas con pan de campo, queso crema y mermelada casera.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Marchi',
				precio: 4200,
				description: 'Infusión + Exprimido de naranja + tostado de jamon y queso con pan de campo.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Reserva',
				precio: 4500,
				description: 'Infusión + Exprimido de naranja + 2 tostadas de pan Bagel con queso crema, huevos revueltos, palta.',
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'La Boca',
				precio: 7500,
				description: 'Para compartir, x2 Infusión + x2 Exprimido de naranja + Porción de tostadas x2 + queso crema y mermelada casera.',
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 15,
		title: 'Jugos/Licuados',
		items: [
			{
				nombre: 'Exprimido Grande',
				precio: 1700,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Licuados',
				precio: 2300,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Jarra de Limonada',
				precio: 3000,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 16,
		title: 'Panaderia',
		items: [
			{
				nombre: 'Medialuna',
				precio: 400,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Medialuna Jamón y Queso',
				precio: 850,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Porción de Budín',
				precio: 850,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Budín',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Porción de Tostadas x3',
				precio: 1800,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Porción de Tostadas x6',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Tostado',
				precio: 3000,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 17,
		title: 'Postres',
		items: [
			{
				nombre: 'Flan Casero',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Budín de Pan',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Frutillas con Crema',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Durazno con Crema',
				precio: 2200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Ensalada de Frutas',
				precio: 2500,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 18,
		title: 'Bebidas',
		items: [
			{
				nombre: 'Agua sin Gas',
				precio: 950,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Agua con Gas',
				precio: 950,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Pepsi 500ML',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Pepsi Black 500ML',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: '7UP/7UP FREE',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Mirinda',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Paso de los Toros Pomelo',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Saborizada 500ML',
				precio: 1050,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 19,
		title: 'Cervezas',
		items: [
			{
				nombre: 'Heineken Lata',
				precio: 1200,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Stella Lata',
				precio: 1500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Corona Porron',
				precio: 1700,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Patagonia Weisse',
				precio: 2500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Patagonia 24/7',
				precio: 2500,
				img: '../../public/imgComida.jpg',
			},
			{
				nombre: 'Patagonia Amber Lager',
				precio: 2500,
				img: '../../public/imgComida.jpg',
			},
		],
	},
	{
		id: 20,
		title: 'Vinos Tintos',

		items: [
			{
				nombre: 'Alaris',
				img: '../../public/imgComida.jpg',
				precio: 3400,
			},
			{
				nombre: 'Uxmal Malbec',
				img: '../../public/imgComida.jpg',
				precio: 5200,

			},
			{
				nombre: 'Uxmal Cabernet Sauvignon',
				img: '../../public/imgComida.jpg',
				precio: 3900,
			},
			{
				nombre: 'Benjamin Malbec',
				img: '../../public/imgComida.jpg',
				precio: 3600,
			},
			{
				nombre: 'Alma Mora Malbec',
				img: '../../public/imgComida.jpg',
				precio: 4200,
			},
			{
				nombre: 'Trumpeter Malbec',
				img: '../../public/imgComida.jpg',
				precio: 7400,
			},
		],
	},
	{
		id: 21,
	title: 'Vinos Blanco',
		items: [
			{
				nombre: 'Cosecha Tardía',
				img: '../../public/imgComida.jpg',
				precio: 3400,
			},
			{
				nombre: 'Santa Julia',
				img: '../../public/imgComida.jpg',
				precio: 6000,
			},
			{
				nombre: 'Terrazas de los Andes',
				img: '../../public/imgComida.jpg',
				precio: 4900,
			},
			{
				nombre: 'Trumpeter Chardonnay',
				img: '../../public/imgComida.jpg',
				precio: 7400,
			},
		],
	},
	{
		id: 22,
		title: 'Tragos',
		items: [
			{
				nombre: 'Campari',
				img: '../../public/imgComida.jpg',
				precio: 2400,
			},
			{
				nombre: 'Cinzano',
				img: '../../public/imgComida.jpg',
				precio: 2100,
			},
			{
				nombre: 'Fernet',
				img: '../../public/imgComida.jpg',
				precio: 2600,
			},
			{
				nombre: 'Gancia',
				img: '../../public/imgComida.jpg',
				precio: 2100,
			},
			{
				nombre: 'Vodka con Naranja',
				img: '../../public/imgComida.jpg',
				precio: 2400,
			},
			{
				nombre: 'Daikiri',
				img: '../../public/imgComida.jpg',
				precio: 2600,
			},
			{
				nombre: 'Gintonic Beefeaters',
				img: '../../public/imgComida.jpg',
				precio: 3600,
			},
			{
				nombre: 'Gintonic Restinga',
				img: '../../public/imgComida.jpg',
				precio: 2700,
			},
			{
				nombre: 'Cuba Libre',
				img: '../../public/imgComida.jpg',
				precio: 2600,
			},
			{
				nombre: 'Johnnie Walker Red Label',
				description: 'Medida',
				img: '../../public/imgComida.jpg',
				precio: 2700,
			},
			{
				nombre: 'Johnnie Walker Black Label',
				description: 'Medida',
				img: '../../public/imgComida.jpg',
				precio: 4200,
			},
		],
	},
]
