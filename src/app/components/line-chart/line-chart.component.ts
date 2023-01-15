import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  public chart: any;
  constructor() { }
    
  ngOnInit(): void {
    this.createChart();

  }

  createChart(){
    // get start day of Sunday
    let dayOfTheWeek = new Date().getDay();
    let startDate = new Date(Date.now() - dayOfTheWeek);
    var xDatasets: String[] = new Array(7);
    let tempDate!: Date ;
    let amountOfDaysToShow = 5;
    tempDate = startDate;
    for(var i = 0; i < 5; i++)
    {
      let tempDate = new Date();
      tempDate.setDate(tempDate.getDate() - (amountOfDaysToShow - i));
      console.log("tempdate value: " + tempDate.getDate());
      console.log("tempdate value2 " + tempDate);
      xDatasets[i] = this.getDayOfWeekName(tempDate.getDay()) + " " + 
                       this.getMonthName(tempDate) + " " +  tempDate.getDate();
    }
    this.chart = new Chart("MyChart", {
      type: 'line', //this denotes tha type of chart

      data: {// values on X-Axis
        labels: [xDatasets[0], xDatasets[1], 
        xDatasets[2], xDatasets[3],
        xDatasets[4], xDatasets[5], 
        xDatasets[6]], 
	       datasets: [
          {
            label: "Sales",
            data: ['467','576', '572', '79', '92',
								 '574'],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: ['542', '542', '536', '327', '17',
									 '0.00', '538', '541'],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    });
  }
  private getMonthName(date: Date): string {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
    const monthIndex = date.getMonth();  // Gets the month (0-11)
  
    return months[monthIndex];  // Returns the name of the month
  }

  private getDayOfWeekName(index: number): string
  {
    const weeks = ["Sun", "Mon", "Tues", "Wed",
    "Thur", "Fri", "Sat"];

    return weeks[index];


  }

 
  

}
