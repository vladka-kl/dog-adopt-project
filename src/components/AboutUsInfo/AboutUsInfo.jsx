import styles from './AboutUsInfo.module.css'
import React from 'react'

function AboutUsInfo ({text, title}) {
    return (
      <section className={styles.aboutUs}>
        <h2>{title}</h2>
        <p>{text}</p>
      </section>
    )
  }

  export { AboutUsInfo }