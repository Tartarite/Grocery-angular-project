package com.Product.AccountDetails.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Product.AccountDetails.Model.AdminModel;

public interface AdminDAO extends JpaRepository<AdminModel, String> {

}
