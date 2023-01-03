import React from 'react'
import '../HeatMap.css'

export default function HeatMap() {
  /*
  * HeatMap
  * A calendar heatmap similar to the github contribution graph, mapping activity over a year
  * there are 5 levels of activity, each represented by a different color.
  * The more activity, the darker the color.
  * The heatmap is responsive and will scale to the size of the container.
  * The heatmap is interactive and will show a tooltip when hovering over a day.
  * The tooltip will show the number of commits for that day.
  * The heatmap will also show a legend with the number of commits for each level of activity.
  * 
  */

  const columns = 53
  const rows = 7
  const cellSize = 15

  // DUMMY DATA
  // Generate a value for each cell, for each day of the year
  const data = Array.from({ length: columns * rows }, () => Math.floor(Math.random() * 5))

  // Match each value to a date from january 1st to december 31st
  const dates = Array.from({ length: columns * rows }, (_, i) => {
    const date = new Date(2022, 0, i + 1)
    return date
  })

  // Join the dates and data arrays into a single array of objects
  const dataWithDates = data.map((value, i) => {
    return { date: dates[i], value }
  })

  const colorMap = {
    // 0 should be very opaque, so that the background color shows through
    0: 'rgba(255, 165, 0, 0.1)',
    1: '#ffd182',
    2: '#ffc054',
    3: '#FFA500',
    4: '#ef8700',
  }

  const monthLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const dayLabels = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat',
  ]

  console.log(dataWithDates)
  return (
    <div>
      <h1>HeatMap</h1>
        {/* Map out the month labels along the top of the heatmap */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          {monthLabels.map((month, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 10,
                fontWeight: 'bold',
              }}
            >
              {month}
            </div>
          ))}
        </div>

        {/* container to align the days of the week and the heatmap */}
        <div
          style={{
            display: 'flex',
            width: '100%',
            height: '100%',
          }}
        >
          <div
          // Create 7 rows for the days of the week, each should match the height of the heatmap tiles
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
              gridGap: 1,
              width: '100%',
              height: '100%',
              gridAutoFlow: 'column',
            }}
          >
            {dayLabels.map((day, i) => (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 10,
                  fontWeight: 'bold',
                }}
              >
                {day}
                </div>
            ))}
          </div>

          {/* Map out the heatmap tiles into a grid, with tooltip on hover showing the data */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: `repeat(${columns}, ${cellSize}px)`,
              gridTemplateRows: `repeat(${rows}, ${cellSize}px)`,
              gridGap: 1,
              width: '100%',
              height: '100%',
              gridAutoFlow: 'column',
            }}
          >
            {dataWithDates.map((d, i) => (
              <div className="tooltip data-tile"
                key={i}
                style={{
                  background: colorMap[d.value],
                  color: 'black',
                  textAlign: 'center',
                  fontSize: 10,
                  fontWeight: 'bold',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 2,
                  margin: 1,
                }}
              >
                {/* display title tooltip on hover */}
                <span className="tooltip tooltip-text">{`${d.value} minutes of activity on ${d.date.toLocaleDateString()}`}</span>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}
