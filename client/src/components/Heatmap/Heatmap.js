import React from "react"
import HeatMap from "react-heatmap-grid"

const Heatmap = () => {
  const xLabels = new Array(24).fill(0).map((_, i) => `${i}`)
  const xLabelsVisibility = new Array(24).fill(0).map((_, i) => i)
  const yLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const data = new Array(yLabels.length)
    .fill(0)
    .map(() =>
      new Array(xLabels.length)
        .fill(0)
        .map(() => Math.floor(Math.random() * 100))
    )
  return (
    <div
      style={{
        width: "100%",
        height: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeatMap
        xLabels={xLabels}
        yLabels={yLabels}
        data={data}
        xLabelsLocation={"bottom"}
        xLabelsVisibility={xLabelsVisibility}
        yLabelWidth={50}
        xLabelWidth={0}
        squares
      />
    </div>
  )
}

export default Heatmap
