package in.austinjose.Bank_Management_System.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import in.austinjose.Bank_Management_System.DAO.UserAuthenticationDAO;
import in.austinjose.Bank_Management_System.DTO.UserAuthentication;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;

@Service
public class UserAuthenticationService {
	@Autowired
	private UserAuthenticationDAO dao;

	public ResponseStructure<UserAuthentication> signUp(UserAuthentication authentication) {
		ResponseStructure<UserAuthentication> structure = new ResponseStructure<UserAuthentication>();
		structure.setData(dao.save(authentication));
		structure.setMsg("Sign_Up Completed Sucessfully");
		structure.setStatus(HttpStatus.CREATED.value());
		return structure;
	}

	public ResponseStructure<List<UserAuthentication>> login() {
		ResponseStructure<List<UserAuthentication>> structure = new ResponseStructure<List<UserAuthentication>>();
		structure.setData(dao.fetchAll());
		structure.setMsg("Login Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}

	public ResponseStructure<UserAuthentication> fetchByContact(long contact) {
		ResponseStructure<UserAuthentication> structure = new ResponseStructure<UserAuthentication>();
		structure.setData(dao.fetchByContact(contact));
		structure.setMsg("Login Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}

	public ResponseStructure<UserAuthentication> updatePassword(long contact, String password) {
		ResponseStructure<UserAuthentication> structure = new ResponseStructure<UserAuthentication>();
		UserAuthentication authentication = dao.fetchByContact(contact);
		if (authentication != null) {
			authentication.setPassword(password);
			structure.setData(dao.save(authentication));
			structure.setMsg("Update Sucessfully");
			structure.setStatus(HttpStatus.OK.value());
			return structure;
		} else {
			structure.setData(null);
			structure.setMsg("Authentication Failed");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}

	public ResponseStructure<UserAuthentication> findById(String id) {
		ResponseStructure<UserAuthentication> structure = new ResponseStructure<UserAuthentication>();
		structure.setData(dao.findById(id));
		structure.setMsg("Find Sucessully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;

	}

	public ResponseStructure<UserAuthentication> deleteById(String id) {
		ResponseStructure<UserAuthentication> structure = new ResponseStructure<UserAuthentication>();
		structure.setData(null);
		dao.deleteById(id);
		structure.setMsg("Deleted Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}
}
