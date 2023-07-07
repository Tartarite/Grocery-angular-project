import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent {
  constructor(private serv:GroceryServiceService,private router:Router){}
  /* aserv:AccountServiceService */
  /* login$=Observable<any> */
  x:Observable<any>
  reg1:any={fname:String,lname:String,email:String,pno:Number,pwd:String}
  register(log:any){
      /* this.serv.getAccountbyEmail(log.value.email).subscribe(
        
      ) */
      
    
    if(!(log.value.epassword===log.value.cpassword))
    {
      document.getElementById("invalidcpass")!.innerHTML="Password does not match";
    } 
    else{
      document.getElementById("invalidcpass")!.innerHTML="";
      this.reg1.fname=log.value.firstName
      this.reg1.lname=log.value.lastName
      this.reg1.email=log.value.email
      this.reg1.pno=parseInt(log.value.phoneNumber,10)
      this.reg1.pwd=log.value.cpassword
      console.log("Before sending")
      console.log(this.reg1)
      console.log(this.serv.getAccountbyEmail(log.value.email).subscribe(
        (resp:any) => {this.x=resp;
          console.log("does email exist? " + this.x);
          if(this.x)  
          {
            /* console.log(this.login$) */
            document.getElementById("result")!.innerHTML="";
            document.getElementById("invalidemail")!.innerHTML="User already exists";
            
          }
          else{
            this.serv.insertAccount(this.reg1).subscribe();
            document.getElementById("invalidemail")!.innerHTML="";
            document.getElementById("result")!.innerHTML="Registration Successful";
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          } 
         }
        // (resp:any) =>{this.login$=resp}
       ))
    
      
    }
    /* this.serv.getDetails(log); */
    
   
    console.log(this.x);
    console.log("Form Submitted",log);
  }
  
 
  
 
}
