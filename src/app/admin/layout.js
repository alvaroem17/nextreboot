
import NavBar from '@/components/navBar/navBar'
import './../globals.css'

export default function HomeLayout({ children }) {
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}