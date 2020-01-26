import React from "react"
import styles from "./view.module.css"

const View = ({ title, children }) => {
  return (
    <>
      <section className={styles.view}>
        <h1 className={styles[`view__heading`]}>{title}</h1>
        {children}
      </section>
    </>
  )
}

export default View
