package in.austinjose.Bank_Management_System.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import in.austinjose.Bank_Management_System.DAO.AdminDAO;
import in.austinjose.Bank_Management_System.DTO.Admin;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;

@Service
public class AdminService {
	@Autowired
	private AdminDAO dao;

	public ResponseStructure<Admin> saveAll(Admin admin) {
		ResponseStructure<Admin> structure = new ResponseStructure<Admin>();
		structure.setData(dao.save(admin));
		structure.setMsg("Account Created Sucessfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return structure;
	}

	public ResponseStructure<List<Admin>> fetchAll() {
		ResponseStructure<List<Admin>> structure = new ResponseStructure<List<Admin>>();
		structure.setData(dao.findAll());
		structure.setMsg("Login Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}
	
	public ResponseStructure<Admin> fetchByContact(long contact){
		ResponseStructure<Admin> structure = new ResponseStructure<Admin>();
		structure.setData(dao.fetchByContact(contact));
		structure.setMsg("Data Found  Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}

	public ResponseStructure<Admin> updatePassword(long contact, String password) {
		ResponseStructure<Admin> structure = new ResponseStructure<Admin>();
		Admin admin = dao.fetchByContact(contact);
		if (admin != null) {
			admin.setPassword(password);
			structure.setData(dao.save(admin));
			structure.setMsg("Update Password Sucessfully");
			structure.setStatus(HttpStatus.OK.value());
			return structure;
		} else {
			structure.setData(null);
			structure.setMsg("Data Not Found");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}
	
}
