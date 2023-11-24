import styles from "./login.module.css";

export default function Loading() {
  return (
    <main className={styles.main}>
      <div id="loading" className={styles.loadingWrapper}>
        <div className={styles.loader}>Carregando...</div>
      </div>
    </main>
  );
}
