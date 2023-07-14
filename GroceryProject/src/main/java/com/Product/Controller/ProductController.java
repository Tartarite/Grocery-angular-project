package com.Product.Controller;

import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.Product.Model.ProductModel;
import com.Product.Service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {
	@Autowired
	ProductService ps;	
	@GetMapping("products")
	public Set<ProductModel> getAllProducts(){
		return this.ps.getAllProducts();
	}
	@GetMapping("products/list")
	public List<ProductModel> getAllProductsAsList(){
		return this.ps.getAllProductsAsList();
	}
	@GetMapping("products/new")
	public List<ProductModel> getAllProductsByTime(){
		return this.ps.getAllProductsByTime();
	}
	@GetMapping("products/popular")
	public List<ProductModel> getAllProductsBySales(){
		return this.ps.getAllProductsBySales()	;
	}
	/*
	 * @PostMapping("addproduct") public void addProduct(@RequestBody ProductModel
	 * p) { System.out.println("Reaching controller"); this.ps.insertProduct(p); }
	 */
	@PostMapping("products/add")
	public void addProduct(@RequestBody ProductModel p) {
		System.out.println("Reaching controller");
		this.ps.insertProduct(p);
	}
	
	@PostMapping("products/id")
	public ProductModel getProductByID(@RequestBody int id) {
		
		return this.ps.getProductById(id);
	}
	@PutMapping("products/update")
	public void updateProduct(@RequestBody ProductModel p) {
		this.ps.updateProduct(p);
	}
	@PostMapping("products/delete")
	public void deleteProduct(@RequestBody int id) {
		System.out.println("deleting");
		this.ps.deleteProduct(id);
	}
	@GetMapping("cart/reset")
	public void resetCart() {
		System.out.println("test");
		this.ps.resetCart();
	}
		
	@PutMapping("products/update/array")
	public void updateProductArray(@RequestBody ProductModel pl[]) {
		this.ps.updateProductArray(pl);
	}
}
