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

  for (const categoryName of categoriesData) {
    await prisma.category.create({
      data: {
        name: categoryName,
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
