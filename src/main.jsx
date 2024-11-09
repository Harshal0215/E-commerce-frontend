import { StrictMode } from 'react'
import ShopContextProvider from './context/ShopContext.jsx'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <ShopContextProvider>
    <App />
  </ShopContextProvider>,
)
