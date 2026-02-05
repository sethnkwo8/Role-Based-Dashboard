import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AuthProvider } from './auth/auth.context'
import { Login } from './pages/Login'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <Login />
    </AuthProvider>
  </StrictMode>,
)
