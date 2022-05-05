import React from 'react'
import styles from "./Home.module.scss"
import ProjectList from './ProjectList'
import projectData from "./projects.json"

const Home = () => {
  return (
    <div className={styles.wrap}>
      
      {/* introduction of myself */}
      <section className={styles.brief}>
        <img src={require("./selfie.png")} />
        <h2>George Wang</h2>
        <ul>
          <li>Curiousity</li>
          <li>Creativity</li>
          <li>Tenacity</li>
        </ul>
        <p>I am an aspiring Computer Science student at the Unviersity of Waterloo. Interested in Computer Networks, Algorithms and Machine Learning.</p>
        <p>Contact me <b>@</b> wzheng2013@gmail.com</p>
        <p><b>MAKE THIS A LINK TO EMAIL WITH UNDERSCORE</b></p>
      </section>

      {/* list of projects */}
      <section className={styles.work}>
        <div className={styles.title}>
          <h3>Projects</h3>
        </div>
        <ProjectList dataSource = {projectData.data} />
      </section>
    </div>
  )
}

export default Home
