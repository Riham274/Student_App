
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './providers/authProvider.tsx'
import StateProvider from './providers/stateProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <AuthProvider>
    <StateProvider>
    <App />
    </StateProvider>
    </AuthProvider>
  </BrowserRouter>,
)
