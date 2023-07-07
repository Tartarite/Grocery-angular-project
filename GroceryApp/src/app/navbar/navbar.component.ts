import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { Observable, combineLatest } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  admin_login$:Observable<boolean>
  login$:Observable<boolean>
  login_state:boolean;
  cart_amt$:Observable<number>
  constructor(private serv:GroceryServiceService){
    /* console.log(this.auth1) */
    
  }
  ngOnInit(){
    this.admin_login$=this.serv.isAdminLoggedIn
    this.login$=this.serv.isLoggedIn  
    console.log("cust: ")
    this.login$.subscribe(console.log)
    console.log("admin: ")
    this.admin_login$.subscribe(console.log)
    this.cart_amt$=this.serv.cartAmount
  }
  get combined(){
    // console.log("Combined latest:")
    // combineLatest([this.admin_login$,this.login$]).subscribe(console.log)
    combineLatest([this.admin_login$,this.login$]).subscribe(
      (res) =>{
        this.login_state=(res[0] || res[1])
        // console.log(this.x)
      }
    
    )
    // console.log(this.login_state)
    return this.login_state
      
    
      
    
  }
  logout(){
    this.serv.logout()
  }
  auth1=this.serv.Auth;
  

}
