import logo from './logo.svg';
import styles from './App.module.scss';
import { Link, Route, Routes } from 'react-router-dom';
import Home from "./Home"

function App() {
  return (
    <div className={styles.App}>

      <header className={styles.header}>
        <div className={styles.box}>
          <div className={styles.boxleft}>George Wang</div>
          <div className={styles.boxright}>
            <Link to="/"><p>About</p></Link>
            <Link to="/projects"><p>Projects link not finished</p></Link>
            {/* add react icon here for github linkedin and resume */}
          </div>
        </div>
      </header>

      <section className={styles.content}>
        <p>hi</p>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
        </Routes>


        {/* <Routes>
          <Route path="/hi">
            <Home />
          </Route>
        </Routes> */}
        

        {/* <Home /> */}
        
        <p>again</p>
      </section>

      <footer className={styles.footer}>
        <p>© <b>2022 George Wang</b></p>
        <p>Feels Love</p>
      </footer>

    </div>
  );
}

export default App;
