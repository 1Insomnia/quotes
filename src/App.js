// App
import { Routes, Route } from "react-router-dom"
// Components
import Navbar from "./components/navigation/Navbar"
import Footer from "./components/navigation/Footer"
import Container from "./components/layout/Container"
// Pages
import Home from "./pages/Home"
import Citation from "./pages/Citation"

function App() {
  return (
    <div className="text-accents-9 bg-background">
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
