import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar"
import Home from "./views/Home"
import Details from "./views/Details"
import ShoppingCart from "./views/ShoppingCart"
import NotFound from "./views/NotFound"
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/:id" element={<Details/>} />
      <Route path="/carrito" element={<ShoppingCart/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App