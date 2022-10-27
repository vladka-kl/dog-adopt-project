import styles from './AboutUsInfo.module.css'
import React from 'react'

function AboutUsInfo ({text, title}) {
    return (
      <section className={styles.aboutUs}>
        <h1 className={styles.titleAU}>{title}</h1>
        <h1>{text}</h1>
      </section>
    )
  }

  export { AboutUsInfo }