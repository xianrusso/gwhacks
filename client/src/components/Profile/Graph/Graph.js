import React from "react"
import Plottable from "plottable"

const Graph = () => {
  let data = []
  for (let i = 1; i < 184; i++) {
    data.push({
      date: new Date(2015, 0, i),
      val: 1.5 * Math.random() - 0.5,
    })
  }

  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  // Gets the date of the top left square in the calendar, i.e. the first Sunday on / before Jan 1
  function getFirstDisplayableSunday(date) {
    return new Date(
      date.getFullYear(),
      0,
      1 - new Date(date.getFullYear(), 0, 1).getDay()
    )
  }

  function getWeekOfTheYear(date) {
    let firstSunday = getFirstDisplayableSunday(date)
    let diff = date - firstSunday
    let oneDay = 1000 * 60 * 60 * 24
    return Math.floor(Math.ceil(diff / oneDay) / 7)
  }

  function monthFormatter() {
    return function(yearAndWeek) {
      let year = yearAndWeek[0]
      let week = yearAndWeek[1]
      let startOfWeek = new Date(
        year,
        0,
        (week + 1) * 7 - new Date(year, 0, 1).getDay()
      )
      if (startOfWeek.getDate() > 7) {
        return ""
      }
      return months[startOfWeek.getMonth()]
    }
  }

  let xScale = new Plottable.Scales.Category()
  let yScale = new Plottable.Scales.Category()
  yScale.domain(daysOfWeek)

  let xAxis = new Plottable.Axes.Category(xScale, "bottom")
  let yAxis = new Plottable.Axes.Category(yScale, "left")
  xAxis.formatter(monthFormatter())

  let colorScale = new Plottable.Scales.InterpolatedColor()
  colorScale.domain([0, 1])
  colorScale.range(["#eee", "#d6e685", "#8cc665", "#44a340", "#1e6823"])

  let plot = new Plottable.Plots.Rectangle()
    .addDataset(new Plottable.Dataset(data))
    .x(function(d) {
      return [d.date.getFullYear(), getWeekOfTheYear(d.date)]
    }, xScale)
    .y(function(d) {
      return daysOfWeek[d.date.getDay()]
    }, yScale)
    .attr(
      "fill",
      function(d) {
        return d.val
      },
      colorScale
    )
    .attr("stroke", "#fff")
    .attr("stroke-width", 2)

  let plotHighlighter = new Plottable.Plots.Rectangle()
    .addDataset(new Plottable.Dataset(data))
    .x(function(d) {
      return [d.date.getFullYear(), getWeekOfTheYear(d.date)]
    }, xScale)
    .y(function(d) {
      return daysOfWeek[d.date.getDay()]
    }, yScale)
    .attr("fill", "black")
    .attr("fill-opacity", 0)

  let group = new Plottable.Components.Group([plot, plotHighlighter])

  let interaction = new Plottable.Interactions.Pointer()
  interaction.onPointerMove(function(p) {
    let nearestEntity = plotHighlighter.entityNearest(p)
    let hoveredMonth = nearestEntity.datum.date.getMonth()
    plotHighlighter.entities().forEach(function(entity) {
      let date = entity.datum.date
      entity.selection.attr(
        "fill-opacity",
        date.getMonth() === hoveredMonth ? 0.5 : 0
      )
    })
  })
  interaction.onPointerExit(function() {
    plotHighlighter.entities().forEach(function(entity) {
      entity.selection.attr("fill-opacity", 0)
    })
  })
  interaction.attachTo(plot)

  let table = new Plottable.Components.Table([
    [yAxis, group],
    [null, xAxis],
  ])

  return (
    <>
      <div>{table.renderTo("svg#example")}</div>
    </>
  )
}

export default Graph
