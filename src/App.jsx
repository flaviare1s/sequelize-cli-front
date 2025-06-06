import AppRoutes from '../routes'
import './App.css'
import { AuthProvider } from './context/AuthContext'

function App() {

  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  )
}

export default App
