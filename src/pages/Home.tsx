import profile from "../assets/profile.png"

export function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center pt-20">
      <section id="home" className="w-full max-w-3xl sm:max-w-4xl lg:max-w-6xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center">

        {/* TEXTO */}
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Paulo Oliveira
          </h1>

          <p className="text-base sm:text-lg md:text-lg lg:text-xl text-gray-400 mb-6 max-w-md sm:max-w-lg lg:max-w-xl mx-auto lg:mx-0">
            Desenvolvedor Front-end focado em criar sites modernos, rápidos e funcionais com React.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="bg-blue-600 hover:bg-blue-700 px-6 h-12 rounded-xl transition w-full sm:w-auto flex items-center justify-center">
              Ver projetos
            </button>

            <button className="border border-gray-500 hover:bg-gray-800 px-6 h-12 rounded-xl transition w-full sm:w-auto flex items-center justify-center">
              Contato
            </button>
          </div>
        </div>

        {/* FOTO */}
        <div className="flex justify-center">
          <img
            src={profile}
            alt="Foto de Paulo Oliveira"
            className="w-56 h-56 sm:w-64 sm:h-64 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-xl border-4 border-gray-800"
          />
        </div>

      </section>
    </div>
  )
}