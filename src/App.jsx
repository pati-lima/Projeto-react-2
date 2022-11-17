import Header from './components/Header'
import Bio from './components/Bio'
import Search from './components/Search'
import Footer from './components/Footer'
import './App.css'

 function App() {
  return (
    <div className="App">
      <Header content="Meu github search" />
      <Bio />
      <Search />
      <Footer content="Feito com ♡ por Daiane dos Anjos. E todos os direitos são reservados." />
    </div>
  )
}

export default App


