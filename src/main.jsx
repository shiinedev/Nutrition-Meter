import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import App from './App'
import NutritionProvider from "./Context"


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NutritionProvider >
    <App />
   </NutritionProvider>
  </StrictMode>,
)
