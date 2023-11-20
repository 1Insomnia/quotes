// App
import { Routes, Route } from "react-router-dom"
// Pages
import Home from "./pages/Home"

function App() {
  return (
    <div className="text-accents-9 bg-background">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
