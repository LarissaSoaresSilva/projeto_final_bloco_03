
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/footer/Footer'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import ListarCategorias from './components/categoria/listarcategorias/ListarCategorias'
import FormCategoria from './components/categoria/formcategorias/FormCategoria'
import { ToastContainer } from 'react-toastify'
import DeletarCategoria from './components/categoria/deletarcategorias/DeletarCategoria'


function App() {


  return (
    <>
     <ToastContainer/>
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categoria" element={<ListarCategorias />} />
            <Route path="/cadastrar" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
