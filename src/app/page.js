import NavBar from '@/components/navBar'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <NavBar />
      <main className={styles.main}>
        <h1>Ylenia Estévez Nails</h1>
      </main>
    </>
  )
}
