import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GroceryServiceService {

  email:String="";
  pwd:String="";
  log_obj:any;
  admin_pass="Test12123"
  admin_email="admin@gmail.com"
  login_email=""
  login_pass=""
  admin_login:BehaviorSubject<boolean> = new BehaviorSubject(false)
  cust_login:BehaviorSubject<boolean> = new BehaviorSubject(false)
  public products:any[] = []
  
  cart_amt:BehaviorSubject<number> = new BehaviorSubject(0)
  showCard:BehaviorSubject<string> = new BehaviorSubject("inline-block")
  hideCard:BehaviorSubject<string> = new BehaviorSubject("none")
  constructor(private http:HttpClient) { }
  get productArray(){
    return this.products
  }
  get sCard(){
    return this.showCard.asObservable()
  }
  get hCard(){
    return this.hideCard.asObservable()
  }
  get cartAmount(){
    return this.cart_amt.asObservable();
  }
  get isAdminLoggedIn(){
    return this.admin_login.asObservable();
  }
  get isLoggedIn(){
    return this.cust_login.asObservable();
  }
  logout(){
    this.email=""
    this.admin_login.next(false)
    this.cust_login.next(false)
  }
  login(email:String){
    this.email=email
    this.cust_login.next(true)
  }
  ad_login(email:String){
    this.email=email
    this.admin_login.next(true)
  }

  
  getLoginDetails(log:any){
    this.login_email=log.value.email;
    this.login_pass=log.value.pwd;
  }
  get Auth(){
    if(this.admin_login.value)
    {
      return true;
    }
    else
    return false;
      
  }
    insertAccount(insert:any){
      
      return this.http.post("http://localhost:8080/registration",insert)
    }

    getAccountbyEmail(acc_email:any){
      
      
      return this.http.post("http://localhost:8080/account",acc_email)
    }
    getAllProducts(){
      return this.http.get("http://localhost:8080/products")
    }
    getAllProductsAsList(){
      return this.http.get("http://localhost:8080/products/list")
    }
    getAllProductsByTime(){
      return this.http.get("http://localhost:8080/products/new")
    }
    getAllProductsBySales(){
      return this.http.get("http://localhost:8080/products/popular")
    }
    addProduct(prod:any){
      
      
      return this.http.post("http://localhost:8080/products/add",prod)
    }
    getProductByID(id:any){
      
      return this.http.post("http://localhost:8080/products/id",id)
    }
    updateProduct(prod:any){
      return this.http.put("http://localhost:8080/products/update",prod)
    }
    deleteProduct(pid:any){
      
      return this.http.post("http://localhost:8080/products/delete",pid)
    }
    loginUser(user1:any){
      return this.http.post("http://localhost:8080/login",user1)
    }
    getAccountDetails(){
      return this.http.post("http://localhost:8080/getdetails",this.email)
    }
    resetCart(){
      
       this.getAllProducts().subscribe(
        (resp:any) =>{
          resp.forEach(
            (res:any) => {
              // console.log("in for each")
              res.cart_qty=0
              // console.log(res.pid + " " + res.pname + " " + res.cart_qty)
            }
          )
        }
        

       )

      // console.log("After reseting service class array")
      return this.http.get("http://localhost:8080/cart/reset")
    }
    updateProductArray(pl:any){
      return this.http.put("http://localhost:8080/products/update/array",pl)
    }
    addToCart(p:any){
      console.log()
      // if(!this.products.includes(p)){
      //   this.products.push(p)
      // }
      var found=false
      this.products.forEach(
        (ele:any) => {
          if(ele.pid == p.pid){
            ele.cart_qty = p.cart_qty
            found = true
          }
            
        }
      )
      if (found==false)
        {
          this.products.push(p)
        }
        
        
      
      this.cart_amt.next(this.cart_amt.value+1)
      console.log("Checking product array in addtocart in service")
      console.log(this.products)
    }
    resetOnCheckout(){
      this.cart_amt.next(0)
      this.products.forEach(
        (res) =>{
          res.cart_qty=0
          const index = this.products.indexOf(res)
          this.products.splice(index,1)
        }
      )
      this.products= []
    }
    removeFromCart(p:any){
      
      if(p.cart_qty >0)
        this.cart_amt.next(this.cart_amt.value-1)
      
      else
      {
        this.cart_amt.next(this.cart_amt.value-1)
        const index = this.products.indexOf(p)
        // console.log(index)
        this.products.splice(index,1)
      }
      
    }
}
