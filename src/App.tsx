import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar"
import { SearchForm } from "./components/SearchForm"

function App() {
  return (
    <div className="min-h-screen p-2">
      <Navbar/>
      <Content/>
      <Footer/>
    </div>
  )
}

function Content() {
  return (
    <div className="container mx-auto">
      <SearchForm />
    </div>
  )
}

export default App
