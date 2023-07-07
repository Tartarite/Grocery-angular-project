import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent {
  
  constructor(private serv:GroceryServiceService){}
  obj:any={pid:Number, dscp:String, pname:String, qty:Number, cat:String,img:String,price:Number
  
  }
  addProduct(log:any){
    this.obj.img=log.value.image
    this.obj.img=this.obj.img.replace("C:\\fakepath\\","assets/images/")
    console.log(this.obj.img)
    console.log(log.value.image)
    this.obj.pid=parseInt(log.value.pid,10)
    this.obj.dscp=log.value.dscp
    this.obj.pname=log.value.pname
    this.obj.qty=parseInt(log.value.qty,10)
    this.obj.cat=log.value.cat
    this.obj.price=log.value.price
    
    console.log(this.obj)
    this.serv.addProduct(this.obj).subscribe()
    document.getElementById("result")!.innerHTML="\tProduct added";
  }
}
