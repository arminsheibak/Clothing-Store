import { Outlet } from 'react-router-dom'
import NavBar from './components/NavBar'
import CartMenu from './components/CartMenu'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <NavBar />
    <CartMenu />
    <Outlet />
    <Footer />
    </>
  )
}

export default App