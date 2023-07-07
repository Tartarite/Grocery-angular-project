import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';

@Component({
  selector: 'app-admin-reports',
  templateUrl: './admin-reports.component.html',
  styleUrls: ['./admin-reports.component.css']
})
export class AdminReportsComponent {
  s:any[] = []
  total:number=0
  constructor(private serv:GroceryServiceService){
    serv.getAllProductsBySales().subscribe(
      (resp:any) =>{this.s=resp
        resp.forEach((ele:any) => {
          console.log(ele)
          console.log("Units * price")
          console.log(ele.units * ele.price)
          this.total+=(ele.units * ele.price)
          console.log(this.total)
        });
       }
      
    )
  }
}
