import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"

const Streak = () => {
  return (
    <>
      <span
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "baseline",
        }}
      >
        <FontAwesomeIcon
          icon={faFire}
          style={{
            color: "red",
            marginRight: "1em",
          }}
        />{" "}
        &nbsp;2 day streak!
      </span>
    </>
  )
}

export default Streak
