package com.Product;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;

@SpringBootApplication
public class GroceryProjectApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(GroceryProjectApplication.class, args);
	}

}
