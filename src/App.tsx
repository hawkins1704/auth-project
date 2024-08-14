import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Login } from './pages/Login'
import { Home } from './pages/Home';
import { Register } from './pages/Register'
import { useAuthStore } from './stores/authStore'

interface PropTypes{
  element:React.ReactNode
}
const ProtectedRoute=({element}:PropTypes)=>{
  const isAuthenticated=useAuthStore((state)=>state.isAuthenticated);
  if(!isAuthenticated){
    return <Navigate to='/login' />
  }
  return element;
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ProtectedRoute element={<Home />}/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
