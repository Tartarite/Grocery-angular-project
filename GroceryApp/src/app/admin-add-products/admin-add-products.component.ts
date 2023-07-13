import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent {
  
  constructor(private serv:GroceryServiceService){}
  obj:any={pid:Number, dscp:String, pname:String, qty:Number, cat:String,img:String,price:Number
  
  }
  test=null
  addProduct(log:any){
    console.log("Before check")
    this.serv.getProductByID(parseInt(log.value.pid,10)).subscribe(
      (resp:any) =>{
        if(resp != null){
          document.getElementById("result")!.innerHTML="";
          document.getElementById("invalidinsert")!.innerHTML="\tProduct exists";
          setTimeout(() => {
            log.reset()
            document.getElementById("invalidinsert")!.innerHTML="";
          }, 3000);
          
        }
        else{
        console.log("After check")
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
        
        
        this.serv.addProduct(this.obj).subscribe()
        document.getElementById("invalidinsert")!.innerHTML="";
        document.getElementById("result")!.innerHTML="\tProduct added";
        setTimeout(() => {
          log.reset()
          document.getElementById("result")!.innerHTML="";
        }, 3000);
      }
          
      }
    )
    console.log(this.test)
    
  }
}
