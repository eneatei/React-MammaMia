import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import PizzaContextProvider from './context/PizzaContext.jsx'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./main.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PizzaContextProvider>
    <ToastContainer />
    <App />
    </PizzaContextProvider>
  </React.StrictMode>,
)
