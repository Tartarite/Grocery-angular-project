package com.Product.AccountDetails.Model;

import jakarta.persistence.*;

@Entity
@Table(name="Admin_Details")
public class AdminModel {
	@Id
	String email;
	@Column(name = "Password")
	String pwd;
	
	public AdminModel() {
		
	}

	public AdminModel(String email, String pwd) {
		
		this.email = email;
		this.pwd = pwd;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
	
	
}
