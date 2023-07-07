import { Component } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { GroceryServiceService } from '../grocery-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  allproducts:any
  total:number=0
  admin_login$:Observable<boolean>
  login$:Observable<boolean>
  login_state:boolean;
  constructor(private serv:GroceryServiceService, private router:Router){
    this.admin_login$=this.serv.isAdminLoggedIn
    this.login$=this.serv.isLoggedIn  
    this.allproducts = this.serv.products
    console.log("In checkout")
    console.log(this.allproducts)
    this.allproducts.forEach(
      (res:any) =>{
        this.total+=(res.price*res.cart_qty)
      }
    )
  }
 
  checkout(){
    //clears cart
    //subtracts qty
    //adds to sales
    //force login
    //add a button to increase/decrease qty=
    combineLatest([this.admin_login$,this.login$]).subscribe(
      (res) =>{
        this.login_state=(res[0] || res[1])
        // console.log(this.x)
      }
    
    )
    if(this.login_state==false){
      alert("Login to continue to checkout")
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1500);
      return
    }
    if(this.allproducts.length == 0)
    {
      alert("Add items to cart to continue")
    }
    else{
     
        this.router.navigate(['/checkout']);
        
    }
   /*  console.log("products array")
    console.log(this.allproducts)
    this.allproducts.forEach(
      (res:any) => {
        res.units+=res.cart_qty
        res.qty-=res.cart_qty
      }
    )
    this.serv.updateProductArray(this.allproducts).subscribe()
    this.serv.resetOnCheckout() */
    
  }
  
}
