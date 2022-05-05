import styles from './App.module.scss';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./Home"

function App() {
  return (
    <div className={styles.App}>
      
      {/* header */}
      <header className={styles.header}>
        <div className={styles.box}>
          <div className={styles.boxleft}>George Wang</div>
          <div className={styles.boxright}>
            <p>make header constant appear with shadow</p>
            <p>ICONS NOT FINISHED</p>
            <p>About</p>
            <p>Projects</p>
          </div>
        </div>
      </header>

      {/* content */}
      <section className={styles.content}>
        {/* <Home /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
        </Routes>
      </BrowserRouter>
      </section>

      {/* footer */}
      <footer className={styles.footer}>
        <p>© <b>2022 George Wang</b></p>
        <p>Feels Love</p>
      </footer>

    </div>
  );
}

export default App;
