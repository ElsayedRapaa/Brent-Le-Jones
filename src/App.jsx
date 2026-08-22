import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"

import Home from "./pages/Home"
import Work from "./pages/Work"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Footer from "./components/Footer"
import ScrollToTop from "./components/ScrollTop"

function App() {

  return (
    <main
      className='
        bg-black
      '
    >
      <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      <Footer />
    </main>
  )
}

export default App
