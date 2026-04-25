import { Header } from "./components/Header"
import { About } from "./pages/About"
import { Contact } from "./pages/Contact"
import { Home } from "./pages/Home"
import { Projects } from "./pages/Projects"

function App() {
  return (
    <>
      <Header />
      <Home />
      <Projects />
      <About />
      <Contact />
      <a
        href="https://wa.me/5515991584049"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-xl flex items-center gap-2 transition"
      >
        💬
      </a>
    </>
  )
}

export default App