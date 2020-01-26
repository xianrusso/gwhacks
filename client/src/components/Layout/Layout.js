import React from "react"

import Header from "../Header/Header"

import "./global.css"
import styles from "./main.module.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="container">
        <Header />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
