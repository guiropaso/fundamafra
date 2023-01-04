import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Proyectos from './components/Proyectos'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/proyectos' element={<Proyectos />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
