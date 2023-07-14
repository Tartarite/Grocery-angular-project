package com.Product.Service;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;

import com.Product.AccountDetails.Model.AdminModel;
import com.Product.DAO.ProductDAO;
import com.Product.Model.ProductModel;

@Service
public class ProductService {
	
	@Autowired
	ProductDAO pdi;
	
	public void insertProduct(ProductModel p) {
		pdi.save(p);
	}
	public void updateProduct(ProductModel p) {
		pdi.save(p);
	}
	public void deleteProduct(int id) {
		
		
		pdi.deleteById(id);;
	}
	
	public Set<ProductModel> getAllProducts() {
		
		return new HashSet<ProductModel>(pdi.findAll());
	}
	public List<ProductModel> getAllProductsAsList() {
		
		return new ArrayList<ProductModel>(pdi.findAll());
	}
	public List<ProductModel> getAllProductsByTime() {
	
		return new ArrayList<ProductModel>(pdi.findAll(Sort.by(Sort.Direction.DESC,"time")));
	}
	public List<ProductModel> getAllProductsBySales() {
		
		return new ArrayList<ProductModel>(pdi.findAll(Sort.by(Sort.Direction.DESC,"units")));
	}
	public ProductModel getProductById(int id) {
		Optional<ProductModel> p = pdi.findById(id);
		
		if(p.isPresent())
			return p.get();
		return null;
	}
	public	void resetCart() {
		List<ProductModel> l=pdi.findAll();
		Iterator<ProductModel> itr = l.iterator();
		
		while(itr.hasNext()) {
			ProductModel p1 = itr.next();
			p1.setCart_qty(0);
			this.pdi.save(p1);
		}
			
	}
	public void updateProductArray(ProductModel pl[]) {
		for(ProductModel p : pl) {
			pdi.save(p);
		}
	}
}		
