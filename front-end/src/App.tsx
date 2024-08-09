import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import CartMenu from './components/CartMenu'

const App = () => {
  return (
    <>
    <NavBar />
    <CartMenu />
    <Outlet />
    </>
  )
}

export default App