const cursos = [
  {
    titulo: "Javascript Moderno Guía definitiva Construye +10 Proyectos",
    tecnologia: "Javascript ES6",
  },
  {
    titulo: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
    tecnologia: "React",
  },
  {
    titulo: "Node js - Bootcamp Desarrollo Web inc. MVC y REST API",
    tecnologia: "React",
  },
  {
    titulo: "React js - ReactJS Avanzado - FullStack React GraphQL y Apollo",
    tecnologia: "React",
  },
];
const libros = [
  {
    nombre: 'It',
    autor: 'Stephen King',
    editoriales: [ 'Porrua' ]
  },
  {
    nombre: 'The Shining',
    autor: 'Stephen King',
    editoriales: [ 'Porrua', 'Planeta' ]
  },
  {
    nombre: 'Berserk',
    autor: 'Kentaro Miura',
    editoriales: [ 'Porrua', 'Castillo' ]
  },
  {
    nombre: 'Vagabond',
    autor: 'Takehiko Inoue',
    editoriales: [ 'Porrua', 'Castillo' ]
  },
  {
    nombre: 'Vinland Saga',
    autor: 'Makoto Yukimura',
    editoriales: [ 'Porrua', 'Castillo' ]
  }
];

const resolvers = {
  Query:{
    obtenerRecursos: () => cursos,
    obtenerTecnologias: () => cursos,
    obtenerLibros: () => libros
  },
};

module.exports = resolvers;