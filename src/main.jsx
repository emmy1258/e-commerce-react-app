import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.jsx'
import Slider from './components/Slider.jsx'
import ProductsList from './components/ProductsList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Navbar />
    <Slider/>
    <ProductsList/>
  </React.StrictMode>,
)
