import React from "react"
import { Link } from "gatsby"
import styles from "./header.module.css"

const Header = () => (
  <header className={styles.header}>
    <div className={styles[`header__wrap`]}>
      <h1 className={styles[`header__heading`]}>
        <Link
          to="/app/details"
          className={`${styles[`header__link`]} ${
            styles[`header__link--home`]
          }`}
        >
          Losing CTRL
        </Link>
      </h1>
      <nav role="main" className={styles[`header__nav`]}>
        <Link to="/app/login" className={styles[`header__link`]}>
          Log In
        </Link>
        {/* <Link to="/app/profile" className={styles[`header__link`]}>
          Profile
        </Link> */}
        <Link to="/app/details" className={styles[`header__link`]}>
          Profile
        </Link>
      </nav>
    </div>
  </header>
)

export default Header
