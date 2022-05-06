import styles from './App.module.scss';
// import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import { FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import pdf from './resume.pdf';

function App() {
  return (
    <div className={styles.App}>
      
      {/* header */}
      <header className={styles.header}>
        <div className={styles.box}>
          {/* <div className={styles.boxleft}>George Wang</div> */}
          <div className={styles.boxright}>
            <a href='https://github.com/ZhengWang26'> <FiGithub size={40} style={{color: 'black'}} /> </a>
            <a href='https://www.linkedin.com/in/zhengwang26/'> <FiLinkedin size={40} style={{color: 'black'}} /> </a>
            <a href = {pdf}> <FiFileText size={40} style={{color: 'black'}} /> </a>
          </div>
        </div>
      </header>

      {/* content */}
      <section className={styles.content}>
        <Home />
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" exact element={ <Home /> } />
        </Routes>
      </BrowserRouter> */}
      </section>

      {/* footer */}
      <footer className={styles.footer}>
        <p>© <b>2022 George Wang</b></p>
        <p>Made with ❤️</p>
      </footer>

    </div>
  );
}

export default App;
