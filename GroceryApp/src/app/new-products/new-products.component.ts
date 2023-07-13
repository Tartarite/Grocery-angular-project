import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-products',
  templateUrl: './new-products.component.html',
  styleUrls: ['./new-products.component.css']
})
export class NewProductsComponent {
  allproducts:any[]=[]
  searchText:string = ''
  constructor(private serv:GroceryServiceService,private router:Router){
    serv.getAllProductsByTime().subscribe(
      (resp:any) =>{
        for(let x of resp)
        {
          if(x.qty>0){
            this.allproducts.push(x)
          }
        }
       }
      
    )
    
  }

  changeVis(p:any){
    var sid= "showAddCart"+p.pid
    var hid= "hideAddCart"+p.pid
    
    document.getElementById(sid)!.style.display="none"
    document.getElementById(hid)!.style.display="inline-block"
    this.addProduct(p)
  }
  addProduct(p:any){
    if(p.cart_qty==p.qty){
      // alert("Max amount")
      var aid:any= "add"+p.pid
      var but = (document.getElementById(aid) as HTMLInputElement)
      but.disabled=true
      return
    }
    if (p.cart_qty ==0)
      {
        p.cart_qty=1
        console.log("updating product cart qty")
        console.log(p)
        this.serv.updateProduct(p).subscribe()
      }
    else
    {
      p.cart_qty++
      this.serv.updateProduct(p).subscribe()
    }
     
    this.serv.addToCart(p)
  }
  removeProduct(p:any){
    
    if(p.cart_qty==1){
      
      var sid= "showAddCart"+p.pid
      var hid= "hideAddCart"+p.pid
      p.cart_qty--
      this.serv.removeFromCart(p)
      this.serv.updateProduct(p).subscribe()
    
     document.getElementById(hid)!.style.display="none"
     document.getElementById(sid)!.style.display="inline-block"
    }
    else{
      
        p.cart_qty--
        this.serv.updateProduct(p).subscribe()
        this.serv.removeFromCart(p)
      
    }

   
  }
  test(p:any){

    console.log("in test method")
    console.log(this.serv.products)
    this.serv.products.forEach(
      (res:any) => {
        if(res.pid==p.pid){
          console.log("res=p")
          if(res.cart_qty>0){
            console.log(res.pname + " " + res.cart_qty)
            var sid= "showAddCart"+res.pid
            var hid= "hideAddCart"+res.pid
            document.getElementById(sid)!.style.display="none"
            document.getElementById(hid)!.style.display="inline-block"
            //p.cart_qty=res.cart_qty

          }
          else{
            var sid= "showAddCart"+res.pid
            var hid= "hideAddCart"+res.pid
            document.getElementById(sid)!.style.display="inline-block"
            document.getElementById(hid)!.style.display="none"
          }
        }
          
      }
    )
  }

  testExpand(p:any){
    var eid= "expandCard"+p.pid
    if(document.getElementById(eid)!.innerHTML=="")
      document.getElementById(eid)!.innerHTML=p.dscp
    else
    document.getElementById(eid)!.innerHTML=""
  }
  testVis(){
    if(this.router.url == "/home" || this.router.url == "/")
      return false
    else
      return true
  }
  testSearchVis(searchValue:string){
    this.searchText=searchValue
  }
}

