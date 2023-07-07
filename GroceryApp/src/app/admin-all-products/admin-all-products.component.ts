import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';

@Component({
  selector: 'app-admin-all-products',
  templateUrl: './admin-all-products.component.html',
  styleUrls: ['./admin-all-products.component.css']
})
export class AdminAllProductsComponent {
  s:any
  constructor(private serv:GroceryServiceService){
    serv.getAllProducts().subscribe(
      (resp:any) =>{this.s=resp

        console.log(this.s)}
      
    )
    
  }

  
  

  
  
}
