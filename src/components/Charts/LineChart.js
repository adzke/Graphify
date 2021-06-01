import React from 'react'
import { Line } from 'react-chartjs-2';



function LineChart(props) {

  const projects = props.projects
  const start = new Date()
  const end = new Date()
  start.setDate(start.getDate() - 30); // set to 'now' minus 30 days.
  start.setHours(0, 0, 0, 0); // set to midnight.
    return (
        <div>
           
          <Line 
             
             options= {{
              scales: {
                xAxes: [{
                  type: "time",
                  time: {
                    min: start,
                    max: end,
                    unit: "day"
                  }
                }]
              }
            }}
         
            data={{
                labels: projects.map((row) => (row.job_due_date)),
                datasets: [{ 
                    data: projects.map((row) => (row.job_value)),
                    label: "Jobs Added",
                    borderColor: "#3e95cd",
                    fill: false
                  },
                 
                ]
            }}
           />  
        </div>
    )
}

export default LineChart