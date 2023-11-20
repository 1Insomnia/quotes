// App
// Components
import Container from './components/layout/Container'
import Hero from './components/hero/Hero'
import Navbar from './components/navigation/Navbar'

function App() {
  return (
    <div className="text-foreground bg-background">
      <Navbar />
      <Container>
        <Hero />
      </Container>
    </div>
  )
}

export default App
