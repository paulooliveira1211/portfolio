import construtora from "../assets/projects/construtora.jpeg"
import hamburgueria from "../assets/projects/hamburgueria.jpeg"
import lavaautos from "../assets/projects/lavaautos.jpeg"
import petshop from "../assets/projects/petshop.jpeg"

export function Projects() {
  const projects = [
    {
      title: "Construtora",
      description: "Site para expandir a divulgação do seu trabalho.",
      link: "https://paulooliveira1211.github.io/construtora/",
      image: construtora,
    },
    {
      title: "Hamburgueria",
      description: "Página de alta conversão para captação de clientes.",
      link: "https://oliveira-burger.vercel.app/",
      image: hamburgueria,
    },
    {
      title: "Lava Autos",
      description: "Desenvolvido para aumentar a visibilidade online e facilitar o contato com clientes da região.",
      link: "https://lava-car-beryl.vercel.app/",
      image: lavaautos,
    },
    {
      title: "Pet Shop",
      description: "Landing Page para divulgação de trabalho com Pets.",
      link: "https://cao-feliz.vercel.app/",
      image: petshop,
    },
  ]

  return (
    <section id="projects" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* TÍTULO */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Meus Projetos
        </h2>

        {/* GRID */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:scale-105 transition duration-300"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  Ver projeto →
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}