import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux'






function PieChart(props) {
  const projects = useSelector(state => state.jobs.jobs)
  
    return (
        <div>

          <Doughnut 
            options={{
                responsive: true,
                plugins: {
                    legend: {
                      position: 'top',
                    },
                    title: {
                      display: true,
                      text: 'Chart.js Doughnut Chart'
                    }
                  },
                
            }}

            
            data={{
                labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
                datasets: [{ 
                    data: [352, 10, 5, 151, 291,],
                    backgroundColor: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
            }]
            }}
           />  
        </div>
    )
}

export default PieChart