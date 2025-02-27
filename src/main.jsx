import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NutritionProvider from './Nutritioncontext'
import App from './App'


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <NutritionProvider >
    <App />
   </NutritionProvider>
  </StrictMode>,
)
