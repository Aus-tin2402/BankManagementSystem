package in.austinjose.Bank_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.austinjose.Bank_Management_System.DTO.Admin;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;
import in.austinjose.Bank_Management_System.Service.AdminService;
@CrossOrigin
@RestController
public class AdminController {
	@Autowired
	private AdminService service;

	@PostMapping("/saveAdmin")
	public ResponseStructure<Admin> sign_Up(@RequestBody Admin admin) {
		return service.saveAll(admin);
	}

	@GetMapping("/fetchAllAdmin")
	public ResponseStructure<List<Admin>> sing_In() {
		return service.fetchAll();
	}

	@PutMapping("/updatePasswordAdmin/{contact}/{password}")
	public ResponseStructure<Admin> updatePassword(@PathVariable long contact, @PathVariable String password) {
		return service.updatePassword(contact, password);
	}

	@GetMapping("/findContactAdmin/{contact}")
	public ResponseStructure<Admin> FindContact(@PathVariable long contact) {
		return service.fetchByContact(contact);
	}
}
