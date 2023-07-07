import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';

@Component({
  selector: 'app-admin-delete-products',
  templateUrl: './admin-delete-products.component.html',
  styleUrls: ['./admin-delete-products.component.css']
})
export class AdminDeleteProductsComponent {
  constructor(private serv:GroceryServiceService){}
  obj:any={pid:Number, dscp:String, pname:String, qty:Number, cat:String,img:String,price:Number}
  id:number
  visible:boolean = false
  x:number
  getProduct(prod:any){ 
    this.visible=true
    this.serv.getProductByID(parseInt(prod.value.pid,10)).subscribe(
      (resp:any) => {
        console.log("resp")
        console.log(resp)
        this.obj.pid=resp.pid
        this.obj.dscp=resp.dscp
        this.obj.pname=resp.pname
        this.obj.qty=resp.qty
        this.obj.cat=resp.cat
        this.obj.img=resp.img
        this.obj.price=resp.price
      }
    )
    console.log("In get product")
    console.log(this.obj)
    
  }
  deleteProduct(log:any){
    console.log(this.obj)
    if(this.obj.pid==undefined)
      document.getElementById("result2")!.innerHTML="Product undefined";
    else{

    document.getElementById("result2")!.innerHTML="";
    this.serv.deleteProduct(this.obj.pid).subscribe()
    
    document.getElementById("result2")!.innerHTML="Product deleted";
    
    setTimeout(() => {
      log.reset()
      document.getElementById("result2")!.innerHTML="";
    }, 3000);
  }
}
}
