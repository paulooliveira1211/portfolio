export function Contact() {
  const phone = "5515991584049"

  const message = encodeURIComponent(
    "Olá Paulo, vi seu portfólio e gostaria de conversar sobre um projeto."
  )

  const link = `https://wa.me/${phone}?text=${message}`

  return (
    <section id="contact" className="bg-gray-950 text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Vamos conversar?
        </h2>

        <p className="text-gray-400 mb-8 text-lg">
          Tem um projeto em mente ou precisa de um site profissional?
          Me chama no WhatsApp e vamos tirar sua ideia do papel.
        </p>

        <a
          href={link}
          target="_blank"
          className="inline-block bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition"
        >
          Falar no WhatsApp
        </a>

      </div>
    </section>
  )
}