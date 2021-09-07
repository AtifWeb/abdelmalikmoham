export const data = {
    labels: ['8am', '9am', '10am','11am','12am','1pm','2mp','3pm','4pm','5pm',
             ],
    datasets: [
      {
    
        backgroundColor: ["#B9B9B9","#B9B9B9","#B9B9B9","#B9B9B9","#B9B9B9","#B9B9B9","#B9B9B9","#F56868"],
    
        borderWidth: 0,
        data: [65, 59, 45, 55, 56,22,33,88,23,55,66]
      }
    ]
  }

export   const options={
    barPercentage:0.4,
    responsive:true,
    maintainAspectRatio:false,
  plugins: {
      legend: {
        display: false
      }
    },
  scales: {
      x: {
   
          grid:{  
             display:false,
             borderDash: [8, 4],
           drawBorder:false
               }
 ,
               ticks: {
           
                  font: {
                      size: 15,
                      color:"yellow"
                  },
             
                },
 
         },
      y: 
         {
         
             min:0,
             // max:7000,
       grid:{
         display:false,
          drawBorder:false
            },
            ticks: {
             display:false,
             beginAtZero: true    
            },
         }
             
      
      }
  }