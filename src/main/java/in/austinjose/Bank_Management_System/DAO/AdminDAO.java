package in.austinjose.Bank_Management_System.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.austinjose.Bank_Management_System.DTO.Admin;
import in.austinjose.Bank_Management_System.Respository.AdminRepository;

@Repository
public class AdminDAO {
	@Autowired
private AdminRepository repository;
	
	public Admin save(Admin  admin) {
		return repository.save(admin);
	}
	
	public List<Admin> findAll(){
		return repository.findAll();
	}
	
	public Admin fetchByContact(long contact) {
		return repository.findByContact(contact);
	}
	
}
