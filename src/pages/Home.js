import React from 'react'
import styles from "./Home.module.scss"
import ProjectList from './ProjectList'
import projectData from "./projects.json"

const Home = () => {
  return (
    <div className={styles.wrap}>
      
      {/* introduction of myself */}
      <section className={styles.brief}>
        <img src={require("./selfie.png")} alt="selfie" />
        <h2>George Wang</h2>
        <ul>
          {/* <li>Curiosity</li>
          <li>Creativity</li>
          <li>Tenacity</li> */}
          <li>Computer Networks</li>
          <li>Machine Learning</li>
          <li>Blockchain</li>
        </ul>
        {/* <p>I am an aspiring Computer Science student at the Unviersity of Waterloo. Interested in Computer Networks, Algorithms and Machine Learning.</p> */}
        <p>An aspiring Computer Science student at the Unviersity of Waterloo.</p>
        <p>Contact me <b>@</b> <a href="mailto:wzheng2013@gmail.com" style={{color:'#00aaff', fontStyle:'italic'}}>wzheng2013@gmail.com</a></p>
      </section>

      {/* list of projects */}
      <section className={styles.work}>
        <div className={styles.title}>
          <h3>Projects</h3>
        </div>
        <ProjectList dataSource={projectData} />
      </section>
    </div>
  )
}

export default Home
