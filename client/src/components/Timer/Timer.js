import React from "react"

const Timer = () => {
  return (
    <>
      <span>
        <label for="time">Set an alarm: </label>
        <input
          type="time"
          min="00:00"
          max="23:59"
          value="11:00"
          id="time"
        ></input>
      </span>
    </>
  )
}

export default Timer
