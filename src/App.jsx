import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Proyectos from './components/Proyectos'
import Contacto from './components/Contacto'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/proyectos' element={<Proyectos />} />
        <Route path='/contacto' element={<Contacto />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
