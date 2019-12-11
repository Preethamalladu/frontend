import { Component, OnInit } from '@angular/core';
declare var require: any
var CanvasJS = require('../canvasjs-2.3.2/canvasjs.min');
import { RestaurantAdminService } from "../restaurant-admin.service";
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-restaurant-analytics-admin',
  templateUrl: './restaurant-analytics-admin.component.html',
  styleUrls: ['./restaurant-analytics-admin.component.scss']
})
export class RestaurantAnalyticsAdminComponent implements OnInit {
  restaurant_id = "";
  constructor(private restaurantAdminService:RestaurantAdminService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurant_id = this.route.snapshot.paramMap.get('id');
    this.restaurant_id = "sdfsdf"
   this.restaurantAdminService.getTotalOrdersAnalytics(this.restaurant_id).subscribe((data: any[])=>{
      console.log(data);
      this.ordersGraph(data);
    }) 
    this.restaurantAdminService.getCategorywiseAnalytics(this.restaurant_id).subscribe((data: any[])=>{
      console.log(data);
      this.categoryGraphs(data);
    }) 
    this.restaurantAdminService.getTotalRevenueAnalytics(this.restaurant_id).subscribe((data: any[])=>{
      console.log(data);
      this.revenueGraph(data);
    }) 
    
  }

  ordersGraph(data){
    var chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      theme: "light2", // "light1", "light2", "dark1", "dark2"
      title:{
        text: "Daily Orders"
      },
      axisY: {
        title: "Orders"
      },
      data: [{        
        type: "column",  
        showInLegend: true, 
        legendMarkerColor: "grey",
        legendText: "MMbbl = one million barrels",
        dataPoints:      
         data
      
      }]
    });
    chart.render();
    
    // var chart = new CanvasJS.Chart("chartContainer", {
    //   animationEnabled: true,
    //   theme: "light2",
    //   title:{
    //     text: "Simple Line Chart"
    //   },
    //   axisY:{
    //     includeZero: false
    //   },
    //   data: [{        
    //     type: "line",       
   
    //     dataPoints:data
    //   }]
    // });
    // chart.render();
  }

  categoryGraphs(data){
    var chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "dark2",
      exportFileName: "Doughnut Chart",
      exportEnabled: true,
      animationEnabled: true,
      title:{
        text: "Most Selling Menu Item"
      },
      legend:{
        cursor: "pointer",
        itemclick: explodePie
      },
      data: [{
        type: "doughnut",
        innerRadius: 150,
        showInLegend: true,
        toolTipContent: "<b>{name}</b>: ${y} (#percent%)",
        indexLabel: "{name} - #percent%",
        // dataPoints: [
        //   { y: 450, name: "Food" },
        //   { y: 120, name: "Insurance" },
        //   { y: 300, name: "Travelling" },
        //   { y: 800, name: "Housing" },
        //   { y: 150, name: "Education" },
        //   { y: 150, name: "Shopping"},
        //   { y: 250, name: "Others" }
        // ]
        dataPoints:data
      }]
    });
    chart2.render();
    
    function explodePie (e) {
      if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
      } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
      }
      e.chart.render();
    }

  }
  revenueGraph(data){
  

    
    var chart3 = new CanvasJS.Chart("chartContainer3", {
      animationEnabled: true,
      
      title:{
        text:"Revenue Graph"
      },
      axisX:{
        interval: 1
      },
      axisY2:{
        interlacedColor: "rgba(1,77,101,.2)",
        gridColor: "rgba(1,77,101,.1)",
        title: "Categories"
      },
      data: [{
        type: "bar",
        name: "companies",
        axisYType: "secondary",
        color: "#014D65",
        // dataPoints: [
        //   { y: 3, label: "Sweden" },
        //   { y: 7, label: "Taiwan" },
        //   { y: 5, label: "Russia" },
        //   { y: 9, label: "Spain" },
        //   { y: 7, label: "Brazil" },
        //   { y: 7, label: "India" },
        //   { y: 9, label: "Italy" },
        //   { y: 8, label: "Australia" },
        //   { y: 11, label: "Canada" },
        //   { y: 15, label: "South Korea" },
        //   { y: 12, label: "Netherlands" },
        //   { y: 15, label: "Switzerland" },
        //   { y: 25, label: "Britain" },
        //   { y: 28, label: "Germany" },
        //   { y: 29, label: "France" },
        //   { y: 52, label: "Japan" },
        //   { y: 103, label: "China" },
        //   { y: 134, label: "US" }
        // ]
        dataPoints:data
      }]
    });
    chart3.render();
  }
  

}
