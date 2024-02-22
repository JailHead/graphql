const { gql } = require ('apollo-server');

const typeDefs = gql`
  type Curso {
    titulo: String    
  }

  type Tecnologia {    
    tecnologia: String
  }

  type Libro {    
    nombre: String
    autor: String
  }

  type Query {
    obtenerRecursos: [Curso]
    obtenerTecnologias: [Tecnologia]
    obtenerLibros: [Libro]
  }
`;

module.exports = typeDefs;