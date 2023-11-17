// App
// Components
import Header from "./components/header/Header";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <main className="pt-16 min-h-screen">
        <div className="container mx-auto px-5">
          <Header />
        </div>
        <div className="min-h-screen"></div>
      </main>
    </div>
  );
}

export default App;
