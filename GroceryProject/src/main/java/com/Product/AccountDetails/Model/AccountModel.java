package com.Product.AccountDetails.Model;

import org.hibernate.annotations.GenericGenerator;

import jakarta.persistence.*;

@Entity
@Table(name="AccountDetails")
public class AccountModel {
	
	@Id
	@GenericGenerator(name="xyz",strategy="increment")
	@GeneratedValue(generator = "xyz")
	int uid;
	@Column(name = "First_Name")
	String fname;
	@Column(name = "Last_Name")
	String lname;
	@Column(name = "Email",unique = true)
	String email;
	@Column(name = "Phone_Number")
	double pno;
	@Column(name = "Password")
	String pwd;
	public AccountModel() {
		
	}
	public AccountModel(int uid, String fname, String lname, String email, double pno, String pwd) {
		
		this.uid = uid;
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.pno = pno;
		this.pwd = pwd;
	}
	public int getUid() {
		return uid;
	}
	public void setUid(int uid) {
		this.uid = uid;
	}
	public String getFname() {
		return fname;
	}
	public void setFname(String fname) {
		this.fname = fname;
	}
	public String getLname() {
		return lname;
	}
	public void setLname(String lname) {
		this.lname = lname;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public double getPno() {
		return pno;
	}
	public void setPno(double pno) {
		this.pno = pno;
	}
	public String getPwd() {
		return pwd;
	}
	public void setPwd(String pwd) {
		this.pwd = pwd;
	}
	
}
 	