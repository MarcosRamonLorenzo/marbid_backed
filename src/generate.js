const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const categoriesData = [
    "Inteligencia Artificial",
    "Aprendizaje Automático",
    "Procesamiento del Lenguaje Natural",
    "Visión por Computadora",
    "Robótica",
    "Ciberseguridad",
    "Blockchain",
    "Desarrollo Web",
    "Diseño Gráfico",
    "Edición de Video",
    "Ilustración",
    "Fotografía",
    "Música",
    "Danza",
    "Escritura Creativa",
    "Marketing Digital",
    "Realidad Virtual",
    "Realidad Aumentada",
    "Desarrollo de Videojuegos",
    "Animación",
    "Producción Audiovisual",
    "Arte Digital",
    "Arte 3D",
    "Arte Conceptual",
    "Arte Tradicional",
    "Arquitectura",
    "Diseño Industrial",
    "Diseño de Moda",
    "Gastronomía",
    "Mixología",
    "Cocina Internacional",
    "Repostería",
    "Belleza y Estética",
    "Fitness y Bienestar",
    "Yoga",
    "Meditación",
    "Mindfulness",
    "Viajes y Turismo",
    "Aventura y Exploración",
    "Ecoturismo",
    "Turismo Cultural",
    "Historia y Patrimonio",
    "Literatura",
    "Poesía",
    "Teatro",
    "Cine",
    "Documentales",
    "Humor",
    "Comedia",
    "Magia",
    "Joyería",
    "Cerámica",
    "Manualidades",
    "Reciclaje y Sostenibilidad",
    "Fotografía de Naturaleza",
    "Fotografía de Retrato",
    "Fotografía de Viajes",
    "Música Clásica",
    "Música Electrónica",
    "Música Jazz",
    "Música Rock",
    "Música Pop",
    "Música Folclórica",
    "Danza Contemporánea",
    "Danza Clásica",
    "Danza Urbana",
    "Danza Moderna",
    "Escritura de Guiones",
    "Escritura de Novelas",
    "Escritura de Poesía",
    "Escritura de Cuentos",
    "Escritura Creativa para Niños",
    "SEO y SEM",
    "Publicidad",
    "Branding",
    "Relaciones Públicas",
    "Gestión de Redes Sociales",
    "Comunicación Corporativa",
  ];

  const offers = [
    {
      "title": "Análisis de Datos",
      "content": "Servicio de análisis de datos avanzado.",
      "price": "100 ",
      "image": "https://source.unsplash.com/random/?database",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbangvg0000s5qx1ltd9ene"
    },
    {
      "title": "Desarrollo de Modelos de Machine Learning",
      "content": "Creación y entrenamiento de modelos de aprendizaje automático.",
      "price": "150 ",
      "image": "https://source.unsplash.com/random/?machinelearning",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbangy90001s5qxck4p90mj"
    },
    {
      "title": "Implementación de Chatbots",
      "content": "Desarrollo de chatbots inteligentes para atención al cliente.",
      "price": "120 ",
      "image": "https://source.unsplash.com/random/?chatbot",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbangzg0002s5qxmkglhp09"
    },
    {
      "title": "Reconocimiento de Imágenes",
      "content": "Sistemas de visión por computadora para reconocimiento de imágenes.",
      "price": "200 ",
      "image": "https://source.unsplash.com/random/?images",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbanh0j0003s5qxygk42kqy"
    },
    {
      "title": "Automatización con Robots",
      "content": "Soluciones de automatización utilizando robots.",
      "price": "250 ",
      "image": "https://source.unsplash.com/random/?robot",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbanh1n0004s5qxfxqx8tem"
    },
    {
      "title": "Consultoría en Ciberseguridad",
      "content": "Servicios de consultoría para proteger sus sistemas y datos.",
      "price": "180 ",
      "image": "https://source.unsplash.com/random/?cibersecurity",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbanh2s0005s5qxnz16rj9q"
    },
    {
      "title": "Desarrollo de Smart Contracts",
      "content": "Creación de contratos inteligentes en blockchain.",
      "price": "220 ",
      "image": "https://source.unsplash.com/random/?blockchain",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh3v0006s5qx3rgc7cre"
    },
    {
      "title": "Diseño y Desarrollo Web",
      "content": "Soluciones completas de diseño y desarrollo web.",
      "price": "300 ",
      "image": "https://source.unsplash.com/random/?web",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh4z0007s5qx8pcq7jqz"
    },
    {
      "title": "Creación de Contenidos Gráficos",
      "content": "Diseño de gráficos personalizados para su marca.",
      "price": "80",
      "image": "https://source.unsplash.com/random/?grafic",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh620008s5qx0er8h9g0"
    },
    {
      "title": "Edición Profesional de Video",
      "content": "Servicios de edición de video de alta calidad.",
      "price": "200 ",
      "image": "https://source.unsplash.com/random/?videos",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh7a0009s5qxlrx4xt2d"
    },
    {
      "title": "Ilustraciones Personalizadas",
      "content": "Creación de ilustraciones únicas para proyectos diversos.",
      "price": "100 ",
      "image": "https://source.unsplash.com/random/?ilustratios",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh8f000as5qx0i5c8qsi"
    },
    {
      "title": "Fotografía Profesional",
      "content": "Sesiones fotográficas profesionales para todo tipo de eventos.",
      "price": "150 ",
      "image": "https://source.unsplash.com/random/?photografy",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanh9i000bs5qxtqyj3u5k"
    },
    {
      "title": "Composición y Producción Musical",
      "content": "Servicios de composición y producción de música.",
      "price": "200 ",
      "image": "https://source.unsplash.com/random/?music",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhan000cs5qx1669fsfa"
    },
    {
      "title": "Clases de Danza",
      "content": "Clases de danza para todos los niveles.",
      "price": "100 ",
      "image": "https://source.unsplash.com/random/?dance",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhbt000ds5qx9ndenjt2"
    },
    {
      "title": "Escritura Creativa",
      "content": "Talleres y servicios de escritura creativa.",
      "price": "100 ",
      "image": "https://source.unsplash.com/random/?writing",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhcw000es5qx1r7fcff8"
    },
    {
      "title": "Estrategias de Marketing Digital",
      "content": "Desarrollo de estrategias de marketing digital efectivas.",
      "price": "250 ",
      "image": "https://source.unsplash.com/random/?mdigitalmrketing",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhe1000fs5qxouoacrsc"
    },
    {
      "title": "Desarrollo de Experiencias de Realidad Virtual",
      "content": "Creación de experiencias inmersivas de realidad virtual.",
      "price": "300 ",
      "image": "https://source.unsplash.com/random/?virtualreality",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhf4000gs5qxu78k0qso"
    },
    {
      "title": "Aplicaciones de Realidad Aumentada",
      "content": "Desarrollo de aplicaciones con tecnología de realidad aumentada.",
      "price": "250 ",
      "image": "https://source.unsplash.com/random/?virtualreality",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhgd000hs5qxl1h8fhfw"
    },
    {
      "title": "Desarrollo de Videojuegos",
      "content": "Creación y desarrollo de videojuegos para diversas plataformas.",
      "price": "400 ",
      "image": "https://source.unsplash.com/random/?videogames",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",

      "category": "clvbanhhi000is5qxwcz9q0is"
    },
    {
      "title": "Animación Digital",
      "content": "Servicios de animación para proyectos variados.",
      "price": "300 ",
      "image": "https://source.unsplash.com/random/?animation",
      "authorCreated": "aBe5eJxOk8SHYpbM62K0QY5w5XG2",
      "category": "clvbanhil000js5qxketya5ld"
    }
  ]



  for (const service of offers) {
    await prisma.service.create({
      data: {
        ...service,
        authorCreated: {
          connect: {
            id: service.authorCreated,
          }
        },
        category : {
          connect: {
            id: service.category
          }
        }
      },
    });
  }

  console.log("Inserciones  insertadas correctamente.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
