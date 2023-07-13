import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';

@Component({
  selector: 'app-admin-update-products',
  templateUrl: './admin-update-products.component.html',
  styleUrls: ['./admin-update-products.component.css']
})
export class AdminUpdateProductsComponent {
  constructor(private serv:GroceryServiceService){}
  obj:any={pid:Number, dscp:String, pname:String, qty:Number, cat:String,img:String,price:Number,units:Number}
  id:number
  visible:boolean = false
  x:number
  getProduct(prod:any){ 
    console.log("testing update")
    console.log(prod.value)
    
    
    this.serv.getProductByID(parseInt(prod.value.pid,10)).subscribe(
      (resp:any) => {
         if(resp==null){
          document.getElementById("invalidproduct")!.innerHTML="Product undefined";
          return
        }
        else{
          document.getElementById("invalidproduct")!.innerHTML="";
        this.visible=true
        console.log("resp")
        console.log(resp)
        this.obj.pid=resp.pid
        this.obj.dscp=resp.dscp
        this.obj.pname=resp.pname
        this.obj.qty=resp.qty
        this.obj.cat=resp.cat
        this.obj.img=resp.img
        this.obj.price=resp.price
        this.obj.units=resp.units
        }
      }
    )
    console.log("In get product")
    console.log(this.obj)
    
  }
  updateProduct(log:any){
    console.log(this.obj)
    if(log.value.dscp!="")
      this.obj.dscp=log.value.dscp
    if(log.value.pname!="")
      this.obj.pname=log.value.pname
    if(log.value.qty!="")
      this.obj.qty=log.value.qty
    if(log.value.price!="")
      this.obj.price=parseInt(log.value.price,10)
    if(log.value.image!=""){
      this.obj.img=log.value.image
      this.obj.img=this.obj.img.replace("C:\\fakepath\\","assets/images/")
    }
    if(log.value.cat!="")
      this.obj.cat=log.value.cat
    this.serv.updateProduct(this.obj).subscribe()
    document.getElementById("result2")!.innerHTML="Product updated";
    
    setTimeout(() => {
      
      log.reset()
      document.getElementById("result2")!.innerHTML="";
    }, 3000);
  }
  
}
