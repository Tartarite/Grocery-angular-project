package com.Product.AccountDetails.Service;

import java.util.Iterator;
import java.util.List;
import java.util.Observable;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Product.AccountDetails.DAO.AccountDAO;
import com.Product.AccountDetails.DAO.AdminDAO;
import com.Product.AccountDetails.Model.AccountModel;
import com.Product.AccountDetails.Model.AdminModel;
import com.Product.AccountDetails.Model.LoginModel;

@Service
public class AccountService {
	@Autowired
	AccountDAO adi;
	@Autowired
	AdminDAO admindao;
	public void registerUser(AccountModel a) {
		this.adi.save(a);
	}
	public boolean getUserByEmail(String email) {
		boolean flag=false;
		List<AccountModel> l1=this.adi.findAll();
		
		Iterator<AccountModel> itr1 = l1.iterator();
		while(itr1.hasNext()) {
			
			AccountModel a = itr1.next();
			if(a.getEmail().equals(email)) {
				flag= true;
				break;
			}
		}
		return flag;
	}
	public int loginUser(LoginModel l) {
		
		int flag=0;
		
		List<AdminModel> l1=this.admindao.findAll();
		List<AccountModel> l2=this.adi.findAll();
		
		Iterator<AdminModel> itr1 = l1.iterator();
		Iterator<AccountModel> itr2 = l2.iterator();
		
		while(itr1.hasNext()) {
			AdminModel a = itr1.next();
			if(a.getEmail().equals(l.getEmail())) {
				if(a.getPwd().equals(l.getPwd())) {
					flag=5;
					return flag;
				}
				else
				{
					flag=2;
					return flag;
				}
			}
		}
		while(itr2.hasNext()) {
			
			AccountModel a = itr2.next();
			if(a.getEmail().equals(l.getEmail())) {
				if(a.getPwd().equals(l.getPwd()))
				{
					flag=1;
					return flag;
				}
				else
				{
					flag=2;
					return flag;
				}
			}
		
		
	}
		return flag;
	}
	public AccountModel getAccountDetails(String email) {

		List<AccountModel> l1=this.adi.findAll();
		
		Iterator<AccountModel> itr1 = l1.iterator();
		while(itr1.hasNext()) {
			
			AccountModel a = itr1.next();
			if(a.getEmail().equals(email)) {
				return a;
			}
		}
		return null;
	}
}
