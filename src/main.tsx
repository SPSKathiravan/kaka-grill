import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './KakaGrill'
import MenuPage from './MenuPage'

const path = window.location.pathname

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {path === '/menu' ? <MenuPage /> : <App />}
  </StrictMode>,
)
