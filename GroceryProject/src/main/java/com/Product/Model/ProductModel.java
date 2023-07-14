package com.Product.Model;


import java.util.Date;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;

import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;

@Entity
@Table(name = "Products")
public class ProductModel {
	@Id
//	@GenericGenerator(name="xyz",strategy="increment")
//	@GeneratedValue(generator = "xyz")
	@Column(name="ID")
	int pid;
	@Column(name="Name")
	String pname;
	@Column(name="Category")
	String cat;
	@Column(name="Quantity")
	int qty;
	@Column(name="Description")
	String dscp;
	String img;
	float price;
	int cart_qty=0;
//	boolean visible = true;
	@Column(name="Units_Sold")
	int units=0;
	
	@Temporal(TemporalType.TIMESTAMP)
 
	Date time;
	public ProductModel() {
		
	}
	public ProductModel(int pid, String pname, String cat, int qty, String dscp,String img,float price,Date time,int cart_qty) {
		
		this.pid = pid;
		this.pname = pname;
		this.cat = cat;
		this.qty = qty;
		this.dscp = dscp;
		this.img=img;
		this.price=price;
		this.time=time;
		this.cart_qty=cart_qty;
//		this.visible=false;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public int getPid() {
		return pid;
	}
	public void setPid(int pid) {
		this.pid = pid;
	}
	public String getPname() {
		return pname;
	}
	public void setPname(String pname) {
		this.pname = pname;
	}
	public String getCat() {
		return cat;
	}
	public void setCat(String cat) {
		this.cat = cat;
	}
	public int getQty() {
		return qty;
	}
	public void setQty(int qty) {
		this.qty = qty;
	}
	public String getDscp() {
		return dscp;
	}
	public void setDscp(String dscp) {
		this.dscp = dscp ;
	}
	public String getImg() {
		return img;
	}
	public void setImg(String img) {
		this.img = img;
	}
	public float getPrice() {
		return price;
	}
	public void setPrice(float price) {
		this.price = price;
	}
	
	public int getCart_qty() {
		return cart_qty;
	}
	public void setCart_qty(int cart_qty) {
		this.cart_qty = cart_qty;
	}
	
	public int getUnits() {
		return units;
	}
	public void setUnits(int units) {
		this.units = units;
	}
	//	public Boolean isVisible() {
//		return visible;
//	}
//	public void setVisible(Boolean visible) {
//		this.visible = visible;
//	}
	@PrePersist	
	public void onCreate() {
		time = new Date();
	}
	  @PreUpdate
	  protected void onUpdate() {
	    time = new Date();
	  }
	
}
