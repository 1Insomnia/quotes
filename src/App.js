// App
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
// Components
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/navigation/Footer"
import Container from "./components/layout/Container"
// Pages
import Home from "./pages/Home"
import Citation from "./pages/Citation"

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant"
    })
  }, [pathname])
  return null
}

function App() {
  return (
    <div className="text-accents-9 bg-background leading-normal">
      <ScrollToTop />
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/citation/:id" element={<Citation />} />
        </Routes>
      </Container>
      <Footer />
    </div>
  )
}

export default App
