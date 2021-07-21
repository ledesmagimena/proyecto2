import { navPag, Footer } from "./funciones.js";
navPag();
Footer();

const games =
  localStorage.getItem("categoriasgames") !== null
    ? JSON.parse(localStorage.getItem("categoriasgames"))
    : [
        {
          precio: 200,
          id: 1,
          title: "Alien Isolation",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/alien-isolation-cover-i1m.jpg",
          categoria: "Accion",
          peso: "11",
          vistas: "3800",
          calificacion: "4.1",
          descripcion:
            "Creative Assembly regresa a las raíces de la saga Alien en una entrega que recupera la esencia de la primera película, dirigida por Ridley Scott. Un survival horror en primera persona en el que controlamos a Amanda Ripley quince años después de la desaparición de su madre.",
          requisitos_min:
            "SO Windows 7 (32bit) Procesador: 3.16Ghz Intel Core 2 Duo E8500 Memoria: 4 GB de RAM Gráficos: 1GB (AMD Radeon HD 5550 or Nvidia GeForce GT 430) DirectX: Versión 11 Red: Conexión de banda ancha a Internet Almacenamiento: 35 GB de espacio disponible",
          requisitos_recomen:
            "SO: Windows 7 (64bit) Procesador: AMD: Phenom II X4 955 - 4 Core, 3.2 GHz or Intel: Core 2 Quad Q9650 - 4 Core, 3.0 GHz Memoria: 8 GB de RAM Gráficos: 2GB (AMD GPU: AMD Radeon R9 200 Series or Nvidia GPU: Nvidia GeForce GTX660) DirectX: Versión 11 Red: Conexión de banda ancha a Internet Almacenamiento: 35 GB de espacio disponible",
        },
        {
          precio: 130,
          id: 2,
          title: "Metro Last Light",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/metro-last-light-complete-edition-cover-wuy.jpg",
          categoria: "Accion",
          peso: "9",
          vistas: "3100",
          calificacion: "3.8",
          descripcion:
            "Los creadores de Metro 2033 nos presentan una secuela que bajo y sobre el suelo de Moscú nos vuelve a poner en la piel de un superviviente, Artyom, en busca de la última luz para la supervivencia humana. Un FPS con toques de survival horror que, como mayor novedad, esta vez incluye multijugador.",
          requisitos_min:
            "Windows: XP (32-Bit), Vista, 7 u 8 CPU: 2.2 GHz Dual Core e.g. Intel Core 2 Duo RAM: 2GB Direct X: 9.0c Tarjeta gráfica: DirectX 9, Shader Model 3 compatible (ej. NVIDIA GTS 250), o AMD equivalente (ej. serie HD Radeon 4000) o superior Para disfrutar de visión 3D: NVIDIA GTX 275 o superior 120Hz Monitor NVIDIA 3D Vision kit para Windows Vista, 7 u 8",
          requisitos_recomen:
            "Windows: Vista, 7 u 8 CPU: 2.6 GHz Quad Core ej. Intel Core i5 RAM: 4GB Direct X: 11 Tarjeta gráfica: NVIDIA GTX 580/660 Ti (o AMD equivalente ej. 7870) o superior Para disfrutar de visión 3D: NVIDIA GTX 580/660Ti o superior 120Hz Monitor NVIDIA 3D Vision kit para Windows Vista, 7 u 8",
        },
        {
          precio: 190,
          id: 3,
          title: "God Eater 3",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/god-eater-3-cover-pip.jpg",
          categoria: "Estrategia",
          peso: "5.2",
          vistas: "1100",
          calificacion: "3.6",
          descripcion:
            "¡Lucha con estilo con armas celestiales totalmente nuevas!¡Amplía tu armamento de combate a corta distancia con el arma celestial a dos manos filo mordedor y el hacha a dos manos luna pesada, o lucha desde lejos con la nueva arma celestial pistola de rayos! ¡Nuevas habilidades en batallas apasionantes! ¡Los ataques finta, terrestres y aéreos evolucionan en poderosas técnicas con artes de Ira! ¡Además, el nuevo ataque de carrera en picado te da gran libertad de movimiento para cazar aragamis! Nuevas y terroríficas amenazas: ¡aragamis de ceniza y ataques devoradores! Aragamis de ceniza: peligrosos nuevos enemigos que pueden utilizar ataques devoradores y el modo Ira para aumentar su fuerza considerablemente! ¡No puedes subestimar a estos enemigos, y vas a necesitar llevar tus armas y tu estilo de juego al siguiente nivel!",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 7 64-bit, SP1 Procesador: Intel Core i5-3470 or AMD FX-8120 Memoria: 4 GB de RAM Gráficos: GeForce GTX 760 or Radeon R9 290X DirectX: Versión 11 Red: Conexión de banda ancha a Internet Almacenamiento: 25 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64-bit Procesador: Intel Core i7-3770 or AMD Ryzen 5 1600 Memoria: 8 GB de RAM Gráficos: GeForce GTX 970 or Radeon R9 fury DirectX: Versión 11 Red: Conexión de banda ancha a Internet Almacenamiento: 25 GB de espacio disponible",
        },
        {
          precio: 50,
          id: 4,
          title: "Edge Of Eternity",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/edge-of-eternity-cover-x7m.jpg",
          categoria: "Estrategia",
          peso: "3.5",
          vistas: "1000",
          calificacion: "2.6",
          descripcion:
            "El mundo de Heryon está destrozado. Hace años, la llegada de una misteriosa fuerza extraterrestre finalmente sumió al planeta en una interminable guerra cataclísmica donde tanto la magia como la tecnología se desataron hasta sus peores y más oscuros extremos. Ahora ha surgido una amenaza aún mayor: en un despreciable acto de guerra, los invasores liberaron la Corrosión, una enfermedad mortal que convierte a las formas de vida de todo tipo en abominaciones deformes. En estos tiempos desesperados, un joven soldado tendrá que enfrentarse a su destino y embarcarse en un viaje épico que cambiará el destino de Heryon para siempre... ",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 120,
          id: 5,
          title: "Godfall",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/godfall-cover-noz.jpg",
          categoria: "Estrategia",
          peso: "4.5",
          vistas: "2000",
          calificacion: "4.1",
          descripcion:
            "Godfall es un videojuego de acción descrito como un looter-slasher en tercera persona centrado en el combate cuerpo a cuerpo y ambientado en un universo de fantasía. Aunque es el componente cooperativo lo que marca la diferencai en Godfall, y es que sus responsables, Counterplay Games, afirman haber diseñado desde cero la aventura teniendo en cuenta el jugar o no con amigos, modificando, por ejemplo, la respuesta de los enemigos en las partidas.",
          requisitos_min:
            "Sistema operativo: Windows 10 Procesador: AMD Ryzen 5 1600 / Intel Core i5-6600 Memoria: 12 GB RAM Gráficos: AMD Radeon RX 580, 8 GB / Nvidia GeForce GTX 1060, 6 GB",
          requisitos_recomen:
            "Sistema operativo: Windows 10 Procesador: AMD Ryzen 5 3600 / Intel Core i7-8700 Memoria: 16 GB RAM Gráficos: AMD Radeon RX 5700 XT, 8 GB / Nvidia GeForce GTX 1080 Ti, 11 GB",
        },
        {
          precio: 150,
          id: 6,
          title: "Forza Horizon 4",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/forza-horizon-4-ultimate-edition-cover-dk3.jpg",
          categoria: "Deportes",
          peso: "3.9",
          vistas: "3000",
          calificacion: "3.9",
          descripcion:
            "Forza Horizon 4 continúa explorando el lado más arcade de la saga Forza Motorsport con un nuevo y bellísimo videojuego de conducción que tiene por identidad un estilo menos cercano a la simulación que el de la franquicia de Turn 10. Esta vez, Playground Games lleva al usuario con Forza Horizon 4 a recorrer una hermosa Gran Bretaña histórica en un mundo abierto compartido donde el usuario podrá coleccionar, modificar y manejar más de 450 coches. ",
          requisitos_min:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 8 GB Memoria de video: 2 GB Procesador: Intel i3-4170 @ 3.7Ghz o Intel i5 750 @ 2.67Ghz Gráficos: NVidia 650TI o NVidia GT 740 o AMD R7 250x",
          requisitos_recomen:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 12 GB Memoria de video: 4 GB Procesador: Intel i7-3820 @ 3.6Ghz Gráficos: NVidia GTX 970 o NVidia GTX 1060 3GB o AMD R9 290x o AMD RX 470",
        },
        {
          precio: 50,
          id: 7,
          title: "Scarlet Nexus",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/scarlet-nexus-deluxe-edition-cover-qjz.jpg",
          categoria: "Accion",
          peso: "4.9",
          vistas: "3000",
          calificacion: "3.8",
          descripcion:
            "En un futuro muy lejano, el descubrimiento de una hormona psiónica en el cerebro humano concedió poderes extrasensoriales a las personas y cambió el mundo tal y como se conocía. Mientras la humanidad se acostumbraba a esta nueva era, los Alter, un grupo de mutantes trastornados, comenzaron a descender del cielo hambrientos de cerebros humanos. Su gran resistencia a los métodos de ataque convencionales provocó que fuera necesario adoptar medidas extremas para hacer frente a la amenaza que suponían para la humanidad. Aquellos dotados de grandes capacidades extrasensoriales, los psiónicos, eran la única posibilidad de frenar el exterminio de los cielos. Las Fuerzas de Supresión de Alter (FSA), última línea defensiva de la humanidad, llevan desde entonces reclutando a psiónicos por su talento. Embárcate en esta aventura y conoce la historia de Yuito Sumeragi, un resuelto recluta procedente de una prestigiosa familia de políticos, o la de Kasane Randall, una misteriosa soldado cuyo poder y talento la han hecho destacar en las FSA. Según sus distintas experiencias se vayan entrelazando, empezarás a desvelar la historia al completo y a desentrañar todos los misterios de un futuro «brain punk» definido por la tecnología y los poderes psíquicos en SCARLET NEXUS. Combate psicoquinético: gracias a tus habilidades psicoquinéticas, el mundo que te rodea será tu mejor arma. Alza, rompe y lanza partes del entorno para ejecutar ataques combinados y aniquilar a tus rivales. Extermina a los Alter: tus enemigos son mutantes trastornados que han caído del cielo y presentan una gran resistencia a los métodos de ataque y defensa convencionales. Al estar atormentados por el dolor constante que les produce su mutación, ansían el cerebro de los organismos vivos para calmar su locura. Descubre un futuro «brain punk»: explora y protege un mundo futurista inspirado en Japón donde se combinan elementos del anime clásico con la ciencia ficción occidental. Una historia dual: sumérgete en la compleja trama de vínculos, coraje y heroísmo de la mano de los creadores del icónico Tales of Vesperia.",
          requisitos_min:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 8 GB Memoria de video: 2 GB Procesador: Intel i3-4170 @ 3.7Ghz o Intel i5 750 @ 2.67Ghz Gráficos: NVidia 650TI o NVidia GT 740 o AMD R7 250x",
          requisitos_recomen:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 12 GB Memoria de video: 4 GB Procesador: Intel i7-3820 @ 3.6Ghz Gráficos: NVidia GTX 970 o NVidia GTX 1060 3GB o AMD R9 290x o AMD RX 470",
        },
        {
          precio: 100,
          id: 8,
          title: "Marvels Avengers",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/marvels-avengers-deluxe-edition-cover-rz1.jpg",
          categoria: "Accion",
          peso: "6.8",
          vistas: "5000",
          calificacion: "4.8",
          descripcion:
            "Marvel's Avengers comienza en el A-Day, en el que Capitán América, Iron Man, Hulk, Black Widow y Thor celebran la inauguración de un cuartel general de alta tecnología de los Avengers en San Francisco. La celebración se torna mortal cuando un accidente catastrófico da lugar a la destrucción masiva de la ciudad. Tras ser culpados de la tragedia, los Avengers se separan. Cinco años después, con la ilegalización de los superhéroes y el mundo en peligro, una gran aventura comienza cuando una valiente joven llamada Kamala Khan decide volver a reunir a los Avengers para detener el poder desenfrenado de la nueva y hermética fuerza conocida como IMA. ",
          requisitos_min:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 8 GB Memoria de video: 2 GB Procesador: Intel i3-4170 @ 3.7Ghz o Intel i5 750 @ 2.67Ghz Gráficos: NVidia 650TI o NVidia GT 740 o AMD R7 250x",
          requisitos_recomen:
            "Sistema operativo: Windows 10 versión 15063.0 o superior Arquitectura: x64 Teclado: teclado integrado Ratón: Ratón integrado DirectX: DirectX 12 API, nivel de funciones de hardware 11 Memoria: 12 GB Memoria de video: 4 GB Procesador: Intel i7-3820 @ 3.6Ghz Gráficos: NVidia GTX 970 o NVidia GTX 1060 3GB o AMD R9 290x o AMD RX 470",
        },
        {
          precio: 90,
          id: 9,
          title: "Outriders",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/outriders-cover-bgy.jpg",
          thumbnailUrl_fondo:
            "https://www.zona-leros.net/storage/wallpapers/sniper-ghost-warrior-contracts-2-wallpaper-y5e.jpg",
          categoria: "Accion",
          peso: "5.8",
          vistas: "4000",
          calificacion: "4.5",
          descripcion:
            "Outriders es un juego de rol y disparos agresivo y con acción intensa. Como tal, la sangre y la violencia son frecuentes y vitales para la experiencia. Las habilidades únicas de los Outriders son tan violentas como los disparos, y los métodos para despachar a los enemigos son sangrientos y macabros. El mundo de Enoch es oscuro y desesperante, al igual que los personajes que habitan en él. El juego incluye lenguaje malsonante, temas para mayores de edad y escenas que podrían considerarse angustiantes.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 Procesador: Intel I5-3470 / AMD FX-8350 Memoria: 8 GB de RAM Gráficos: Nvidia GeForce GTX 750ti / AMD Radeon R9 270x DirectX: Versión 11 Almacenamiento: 70 GB de espacio disponible Notas adicionales: 720p / 60fps",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 Procesador: Intel i7-7700K / AMD Ryzen 5 2600X Memoria: 16 GB de RAM Gráficos: Nvidia GeForce GTX 1070, 8 GB / Radeon RX Vega 56, 8 GB DirectX: Versión 12 Almacenamiento: 70 GB de espacio disponible Notas adicionales: 1080p / 60fps",
        },
        {
          precio: 50,
          id: 10,
          title: "Farm Manager 2021",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/farm-manager-2021-cover-7du.jpg",
          categoria: "Estrategia",
          peso: "2.8",
          vistas: "1000",
          calificacion: "3.6",
          descripcion:
            "¡Prepárate para un desafío logístico en el nuevo y mejorado Farm Manager 2021! Planifica el trabajo en el campo según las estaciones, cuida de los animales, mantén satisfechos a tus trabajadores y las máquinas en buen estado y reacciona a las inclemencias del tiempo.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 70,
          id: 11,
          title: "Oympic Games Tokyo 2020",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/olympic-games-tokyo-2020-the-official-video-game-cover-f0y.jpg",
          categoria: "Deportes",
          peso: "7.8",
          vistas: "5000",
          calificacion: "4.6",
          descripcion:
            "La pandemia de coronavirus ha parado el mundo durante un tiempo, pero a medida que el proceso de vacunación avanza, también lo hacen las diversas actividades y eventos retrasados. Los Juegos Olímpicos de este verano se celebrarán en Tokio, pero los jugadores podrán participar de manera virtual gracias a Juegos Olímpicos de Tokio 2020 – El Videojuego Oficial, que se comercializará en todo el mundo el próximo 22 de junio de 2021 a un precio de 39,99 euros, tal y como ha anunciado Sega of America.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 50,
          id: 12,
          title: "Factorio",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/factorio-cover-om1.jpg",
          categoria: "Estrategia",
          peso: "7.8",
          vistas: "5000",
          calificacion: "4.6",
          descripcion:
            "Comenzarás cortando arboles y extrayendo minerales, construyendo cintas transportadoras y brazos mecánicos a mano, pero en poco tiempo tu fábrica puede llegar a convertirse en una megaindustria, con gigantes plantas solares, refinando y craqueando petróleo, produciendo y desplegando ejércitos de robots logísticos y de construcción, todo esto para satisfacer tus necesidades de recursos.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 90,
          id: 13,
          title: "Spellforce 3",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/spellforce-3-cover-vnr.jpg",
          categoria: "Estrategia",
          peso: "8.8",
          vistas: "3000",
          calificacion: "4.8",
          descripcion:
            "Corre el año 518. La rebelión de los magos renegados, las llamadas Guerras Mágicas, ha sido sofocada por la Corona. Sin embargo, ha sido una victoria pírrica. Regiones enteras se han sumido en la anarquía, los refugiados vagan por las tierras en busca de refugio y ha surgido una misteriosa y mortífera plaga conocida como el «hervor de sangre» que se ha extendido con rapidez.  En estos tiempos difíciles, la gente se aferra a cualquier atisbo de esperanza que puede encontrar. La Pureza de la Luz, liderada por el carismático Rondar Lacaine, afirma que los magos son la causa de todas las desgracias, y que solo la segunda venida de Aonir, el padre de todos los dioses, devolverá a Eo su antiguo esplendor. ",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 150,
          id: 14,
          title: "Transformers War For Cybertron",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/transformers-war-for-cybertron-cover-u3j.jpg",
          categoria: "Accion",
          peso: "10.4",
          vistas: "6000",
          calificacion: "4.8",
          descripcion:
            "El juego se divide en dos campañas, que llevan a la misma historia. Podemos optar por seguir la campaña Decepticon o Autobot, pero si se quiere seguir la trama deberemos empezar por la Decepticon. Sin embargo, hay hechos que se comparten en una y la otra, lo cual aclara dudas.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 100,
          id: 15,
          title: "NBA 2k19 Anniversary Edition",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/nba-2k19-20th-anniversary-edition-cover-m6e.jpg",
          categoria: "Deportes",
          peso: "11.4",
          vistas: "5500",
          calificacion: "4.8",
          descripcion:
            "NBA 2K celebra los 20 años de redefinir lo que pueden ser los juegos deportivos, desde los mejores gráficos y juegos de su clase hasta los modos de juego innovadores y un “vecindario” inmersivo en un mundo abierto. Baloncesto de la vida emoción y cultura.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 60,
          id: 16,
          title: "Ride 4",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/ride-4-complete-the-set-edition-cover-bh3.jpg",
          categoria: "Deportes",
          peso: "7.4",
          vistas: "3500",
          calificacion: "4.3",
          descripcion:
            "¿Estáis listos para vivir la mejor experiencia posible para un aficionado a las motocicletas? RIDE 4 avivará vuestra llama competitiva con cientos de motos, docenas de circuitos y un nuevo nivel de realismo.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 100,
          id: 17,
          title: "Tennis World Tour 2",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/tennis-world-tour-2-ace-edition-cover-gzm.jpg",
          categoria: "Deportes",
          peso: "7.4",
          vistas: "3500",
          calificacion: "4.3",
          descripcion:
            "Juega con los mejores tenistas del mundo o crea el tuyo propio para intentar liderar las clasificaciones mundiales. Más trepidante, con más animaciones y más realismo: experimenta las auténticas sensaciones del tenis, en partidos individuales o de dobles, y desafía a tus amigos en modo local u online.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
        {
          precio: 50,
          id: 18,
          title: "Motogp 21",
          thumbnailUrl:
            "https://www.zona-leros.net/storage/games_tumbl/motogp-21-cover-me2.jpg",
          categoria: "Deportes",
          peso: "9.3",
          vistas: "3800",
          calificacion: "4.7",
          descripcion:
            "Colócate en la parrilla de salida y prepárate para el videojuego más realista e inmersivo hasta la fecha de MotoGP™. LO MEJOR DE MotoGP™ Vive la temporada 2021 al máximo con las categorías de MotoGP™, Moto2™ y Moto3™. Vive la experiencia sobre dos ruedas más auténtica e inmersiva con más de 120 pilotos oficiales, más de 20 circuitos y nuevas funciones mejoradas que alcanzan una dimensión de realismo sin precedentes. Ah, y por primera vez: penalización de vuelta larga. Revive la historia de MotoGP™ con más de 40 pilotos históricos y sus emblemáticas motos.",
          requisitos_min:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i5 6500 Memoria: 8 GB de RAM Gráficos: NVIDIA GTX 970 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
          requisitos_recomen:
            "Requiere un procesador y un sistema operativo de 64 bits SO: Windows 10 64 bits Procesador: Intel i7 8600 Memoria: 12 GB de RAM Gráficos: NVIDIA GTX 1070 DirectX: Versión 11 Almacenamiento: 20 GB de espacio disponible",
        },
      ];

const formulario = document.querySelector("#form");
const input_categoria = document.querySelector("#category");
const input_titulo = document.querySelector("#title");
const input_imagen = document.querySelector("#img");
const input_precio = document.querySelector("#price");
const input_descripcion = document.querySelector("#description");
const boton_enviar = document.querySelector("#button_send");
const botonAñadir = document.querySelector("#button_add");
const lista = document.querySelector("#list");

//const lista_nuevo = document.querySelector("#list_new");
let indexToId;
//let arrayJuegos = [];
let arrayDestacados = [];
let categoria_destacados = [];

document.addEventListener("DOMContentLoaded", (e) => {
  botonAdd();
  saveDataLS(games);

  listaJuegos();
});

const botonAdd = () => {
  const div = document.createElement("div");
  div.classList.add("btn");
  div.innerHTML = `
  <button type="button" class="btn btn-primary ml-3" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"><i class="fas fa-plus"></i>
  `;
  botonAñadir.append(div);
};

const saveDataLS = (games) => {
  localStorage.setItem("categoriasgames", JSON.stringify(games));
};

const listaJuegos = () => {
  games.forEach((element) => {
    const row = document.createElement("tbody");
    row.innerHTML = `
          <tr id="${element.id}"> 
            <td><img src="${element.thumbnailUrl}" class="lista_juegos" alt=""></td>
            <td ><h5 class="ml-2">${element.title}</h5></td>
            <td>${element.categoria}</td>
            <td>$${element.precio}</td>
            <td><a href=""></a><i class="fas fa-trash delete mx-1"data-toggle="modal" data-target="#ModalEliminar"></i></td>
            <td><a href=""></a><i class="far fa-edit edit" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo"></i></td>
            <td><a href=""></a><i class="fas fa-crown text-dark destacado mx-1"></i></td>
         </tr>
    `;
    lista.append(row);
  });
};

const crearJuego = (title, precio, descripcion, categoria, thumbnailUrl) => {
  const juego = {
    title,
    precio,
    descripcion,
    categoria,
    thumbnailUrl,
    id: Date.now(),
  };
  games.push(juego);
  saveDataLS(games);
  return juego;
};

const cleanDomNewList = () => {
  while (lista.firstChild) {
    lista.removeChild(lista.firstChild);
  }
};

const crearDestacados = (id) => {
  const destacados = games.find((juego) => juego.id == id);
  arrayDestacados.push(destacados);
  localStorage.setItem("destacados", JSON.stringify(arrayDestacados));
};

const cambiarColor = (e) => {
  e.target.classList.remove("text-dark");
  e.target.classList.add("text-danger");
};

const deleteNewListLS = (id) => {
  const newgames = games.filter((juego) => juego.id != id);
  saveDataLS(newgames);
};

const editText = (titulo, precio, descripcion, categoria, thumbnailUrl) => {
  const editgames = games.map((juego) => {
    if (juego.id == indexToId) {
      return {
        ...juego,
        title: titulo,
        precio: precio,
        descripcion: descripcion,
        categoria: categoria,
        thumbnailUrl: thumbnailUrl,
      };
    } else {
      return juego;
    }
  });

  saveDataLS(editgames);
};

const editForm = (id) => {
  const element = games.find((juego) => juego.id == id);
  input_categoria.value = element.categoria;
  input_descripcion.value = element.descripcion;
  input_imagen.value = element.thumbnailUrl;
  input_precio.value = element.precio;
  input_titulo.value = element.title;
  boton_enviar.textContent = "Editar";
};

lista.addEventListener("click", (e) => {
  //e.preventDefault();
  if (e.target.classList.contains("delete")) {
    const numeroId = e.target.parentElement.parentElement.id;
    //console.log(e.target.parentElement.parentElement.id);
    deleteNewListLS(numeroId);
  }
  if (e.target.classList.contains("edit")) {
    indexToId = e.target.parentElement.parentElement.id;
    //console.log(e.target.parentElement.parentElement.id);
    editForm(indexToId);
  }
  if (e.target.classList.contains("destacado")) {
    indexToId = e.target.parentElement.parentElement.id;
    crearDestacados(indexToId);
    cambiarColor(e);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const thumbnailUrl = input_imagen.value;
  const precio = input_precio.value;
  const categoria = input_categoria.value;
  const descripcion = input_descripcion.value;
  const titulo = input_titulo.value;

  if (boton_enviar.textContent === "Añadir") {
    crearJuego(titulo, precio, descripcion, categoria, thumbnailUrl);
  } else {
    editText(titulo, precio, descripcion, categoria, thumbnailUrl);
  }
  form.reset();
});

const showError = (msg) => {
  const errorMsg = document.createElement("p");
  errorMsg.classList.add("text-center", "error", "bg-danger", "text-white");
  errorMsg.innerText = msg;
  const errors = document.querySelectorAll(".error");
  if (errors.length === 0) {
    form.append(errorMsg);
  }
};

const validaciones = (e) => {
  boton_enviar.disabled = true;
  if (e.target.value.length > 0) {
    e.target.classList.add("border-primary");
    e.target.classList.remove("border-danger");
    const error = document.querySelector("p.error");
    if (error) {
      error.remove();
    }
  } else {
    e.target.classList.add("border-danger");
    e.target.classList.remove("border-primary");
    showError("Todos los campos son obligatorios");
  }

  if (
    input_descripcion.value !== "" &&
    input_titulo.value !== "" &&
    input_precio.value !== "" &&
    input_imagen.value !== "" &&
    input_descripcion.value.length <= 100 &&
    input_imagen.value.length <= 100 &&
    input_titulo.value.length <= 15 &&
    input_titulo.value.length
  ) {
    boton_enviar.disabled = false;
    setTimeout(() => {
      boton_enviar.disabled = true;
      input_imagen.classList.remove("border-primary");
      input_descripcion.classList.remove("border-primary");
      input_precio.classList.remove("border-primary");
      input_titulo.classList.remove("border-primary");
    }, 1500);
  }
};

input_descripcion.addEventListener("blur", validaciones);
input_imagen.addEventListener("blur", validaciones);
input_precio.addEventListener("blur", validaciones);
input_titulo.addEventListener("blur", validaciones);
