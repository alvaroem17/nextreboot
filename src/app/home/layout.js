
import NavBar from '@/components/navBar/navBar'
import './../globals.css'
import Footer from '@/components/footer/footer'

export default function HomeLayout({ children }) {
  return (
    <>
        <NavBar/>
        {children}
        <Footer/>
    </>
  )
}