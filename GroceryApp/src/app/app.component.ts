import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { GroceryServiceService } from './grocery-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public router:Router,private serv:GroceryServiceService){
    
  }
  ngOnInit(){
    console.log("Cart reset")
    console.log(this.serv.products)
    this.serv.resetCart().subscribe()
    console.log(this.serv.products)
  }
  title = 'GroceryApp';
}
