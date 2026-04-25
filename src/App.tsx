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
    </>
  )
}

export default App