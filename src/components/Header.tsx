import { useState } from "react"

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="w-full fixed top-0 left-0 bg-gray-900 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

        {/* LOGO */}
        <h1 className="font-bold text-lg">Paulo.dev</h1>

        {/* MENU DESKTOP */}
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#" className="hover:text-blue-400">Início</a>
          <a href="#projects" className="hover:text-blue-400">Projetos</a>
          <a href="#about" className="hover:text-blue-400">Sobre</a>
          <a href="#contact" className="hover:text-blue-400">Contato</a>
        </nav>

        {/* BOTÃO HAMBÚRGUER */}
        <button
          className="md:hidden flex flex-col gap-1"
          onClick={() => setOpen(!open)}
        >
          <span className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`}></span>
          <span className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>
      </div>

      {/* MENU MOBILE */}
      {open && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800">
          <nav className="flex flex-col items-center gap-4 py-4 text-sm">
            <a href="#" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Início
            </a>
            <a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Projetos
            </a>
            <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Sobre
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-400">
              Contato
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}