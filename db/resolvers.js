//BD
const cursos = [
  { titulo: "JAVASCRIPT GUIA ALGOdasdsa", tecnologia: "JavaScript ES6" },
  { titulo: "JAVASCRIPT otra guia", tecnologia: "React" },
  { titulo: "JAVASCRIPT Guia react", tecnologia: "Java" },
  { titulo: "JAVASCRIPT gia react pro", tecnologia: "React" },
];

// Resolvers
const resolvers = {
  Query: {
    obtenerCursos: (_,{input},ctx) => {
        console.log(ctx)
        const resultado=cursos.filter(curso=> curso.tecnologia==input.tecnologia)

        return resultado;
    },
    obtenerTecnologia: () => cursos,
  },
};

module.exports = resolvers;
