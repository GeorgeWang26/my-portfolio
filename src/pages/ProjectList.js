import React from 'react'
import styles from "./ProjectList.module.scss"
import images from "./projectCover"

const ProjectList = ({dataSource}) => {
  return (
    <div className={ styles.worklist }>
      <ul>
        {
          dataSource && dataSource.map(item =>
            <li key={item.id}>
              <a href={item.link}>
                <div className={styles.cover}>
                  <img src={images[item.id]} alt="project-icon"/>
                </div>

                <div className={styles.workbrief}>
                  <h3>{item.title}</h3>
                  <p>{item.brief}</p>
                  <div className={styles.tag}>
                    {item.tags && item.tags.map(i => <span key={i}>{i}</span>)}
                  </div>
                </div>
              </a>
            </li>
          )
        }
      </ul>
    </div>
  )
}

export default ProjectList
