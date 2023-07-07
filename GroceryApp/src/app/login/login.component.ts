import { Component } from '@angular/core';
import { GroceryServiceService } from '../grocery-service.service';
import { RegistrationComponent } from '../registration/registration.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  flag:Number
  user1:any={
    email:String,pwd:String
  }
  
  constructor(private serv:GroceryServiceService,private router:Router){
    
    
  }
  
  login(log:any){
    // this.serv.getLoginDetails(log);
    this.user1.email=log.value.email
    this.user1.pwd=log.value.pwd
    this.serv.loginUser(this.user1).subscribe(
      (resp:any) => {
        this.flag = resp
        console.log(this.flag)
        if(this.flag==1){
          document.getElementById("result_false")!.innerHTML="";
          document.getElementById("result_true")!.innerHTML="Login Successful"
          this.serv.login(this.user1.email)
          setTimeout(() => {
            this.router.navigate(['/home']);
          }, 3000);
        }
       
        else
        if(this.flag==2){
          document.getElementById("result_true")!.innerHTML=""
          document.getElementById("result_false")!.innerHTML="Incorrect Password";
        }
        
        else
        if(this.flag==5){
          document.getElementById("result_false")!.innerHTML="";
          document.getElementById("result_true")!.innerHTML="Admin Login Successful"
          this.serv.ad_login(this.user1.email)
          setTimeout(() => {
            this.router.navigate(['/admin/all-products']);
          }, 3000);
        }
        
        else{
          document.getElementById("result_true")!.innerHTML=""
          document.getElementById("result_false")!.innerHTML="Incorrect Email ID";
        }
        
      }
    )
  }
}
