package com.Product.AccountDetails.DAO;

import org.springframework.data.jpa.repository.JpaRepository;

import com.Product.AccountDetails.Model.AccountModel;

public interface AccountDAO extends JpaRepository<AccountModel, Integer>{

}
