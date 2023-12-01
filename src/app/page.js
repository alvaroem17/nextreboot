'use client'
import NavBar from '@/components/navBar/navBar'
import styles from './page.module.css'
import Landing from '@/components/landing/landing'
import Location from '@/components/location/location'
import Schedule from '@/components/schedule/schedule'
import Footer from '@/components/footer/footer'
import Contact from '@/components/contact/contact'
export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
          <Landing/>
          <Location/>
          <Schedule/>
          <Contact/>
      </main>
      <Footer/>
    </>
  )
}
