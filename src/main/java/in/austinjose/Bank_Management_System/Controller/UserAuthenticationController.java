package in.austinjose.Bank_Management_System.Controller;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import in.austinjose.Bank_Management_System.DTO.UserAuthentication;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;
import in.austinjose.Bank_Management_System.Service.UserAuthenticationService;
@CrossOrigin
@RestController
public class UserAuthenticationController {
	@Autowired
	private UserAuthenticationService service;

	@PostMapping("/UserAuthentication_save")
	public ResponseStructure<UserAuthentication> sign(@RequestBody UserAuthentication authentication) {
		return service.signUp(authentication);
	}

	@GetMapping("/UserAuthentication_login")
	public ResponseStructure<List<UserAuthentication>> login() {
		return service.login();
	}

	@PutMapping("/UserAuthentication_Update/{contact}/{password}")
	public ResponseStructure<UserAuthentication> updatePassword(@PathVariable long contact,
			@PathVariable String password) {
		return service.updatePassword(contact, password);
	}

	@GetMapping("/UserAuthentication_findContact/{contact}")
	public ResponseStructure<UserAuthentication> findContact(@PathVariable long contact) {
		return service.fetchByContact(contact);
	}

	@GetMapping("/UserAuthentication_findById/{id}")
	public ResponseStructure<UserAuthentication> findById(@PathVariable String id) {
		return service.findById(id);
	}

	@DeleteMapping("/UserAuthentication_deleteById/{id}")
	public ResponseStructure<UserAuthentication> deleteById(@PathVariable String id) {
		return service.deleteById(id);
	}
}
