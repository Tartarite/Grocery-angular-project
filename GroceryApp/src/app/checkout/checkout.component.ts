import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { Router } from '@angular/router';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  test:String
  eml:String
  fname:String
  lname:String
  pno:String
  allproducts:any
  constructor(private serv:GroceryServiceService, private router:Router){
    this.allproducts = this.serv.products
    this.serv.getAccountDetails().subscribe(
      (resp:any) => {
        this.eml=resp.email
        this.fname=resp.fname
        this.lname=resp.lname
        this.pno=resp.pno
      }
    )
    
  }
  checkout(){
    console.log("products array")
    console.log(this.allproducts)
    this.allproducts.forEach(
      (res:any) => {
        res.units+=res.cart_qty
        res.qty-=res.cart_qty
        res.cart_qty=0
      }
    )
    this.serv.updateProductArray(this.allproducts).subscribe()
    this.serv.resetOnCheckout()
    document.getElementById("result")!.innerHTML="Thank for shopping with Freshy"
    setTimeout(() => {
      this.router.navigate(['']);
    }, 3000);
  }
}
