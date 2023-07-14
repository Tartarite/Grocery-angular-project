package com.Product.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Product.Model.ProductModel;

public interface ProductDAO extends JpaRepository<ProductModel, Integer>{

}
