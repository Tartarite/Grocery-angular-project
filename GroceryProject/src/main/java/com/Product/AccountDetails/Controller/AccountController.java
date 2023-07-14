package com.Product.AccountDetails.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.Product.AccountDetails.Model.AccountModel;
import com.Product.AccountDetails.Model.LoginModel;
import com.Product.AccountDetails.Service.AccountService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class AccountController {
	@Autowired
	AccountService as;
	
	@PostMapping("registration")
	public void registerUser(@RequestBody AccountModel a) {
		System.out.println("in controller");
		this.as.registerUser(a);
	}
	
	@PostMapping("account")
	public boolean checkUserEmail(@RequestBody String s) {
		System.out.println(s);
		System.out.println(this.as.getUserByEmail(s));
		return this.as.getUserByEmail(s);
		
	}
	@PostMapping("login")
	public int loginUser(@RequestBody LoginModel l) {
		System.out.println(this.as.loginUser(l));
		return this.as.loginUser(l);
	}
	@PostMapping("getdetails")
	public AccountModel getAccountDetails(@RequestBody String email) {
		
		return this.as.getAccountDetails(email);
	}
}
