package in.austinjose.Bank_Management_System.Controller;

import java.util.List;

import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import in.austinjose.Bank_Management_System.DTO.Account;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;
import in.austinjose.Bank_Management_System.Service.AccountService;
@CrossOrigin
@RestController
public class AccountController {
	@Autowired
	private AccountService service;

	@PutMapping("/deposit/{id}/{amount}")
	public ResponseStructure<Account> deposit(@PathVariable String id, @PathVariable double amount) {
		return service.deposit(id, amount);
	}

	@PutMapping("/withdrawal/{id}/{amount}")
	public ResponseStructure<Account> withdrawal(@PathVariable String id, @PathVariable double amount) {
		return service.withdrawal(id, amount);
	}

	@PutMapping("/fundTransfer/{from}/{to}/{amount}")
	public ResponseStructure<Account> fundTransfer(@PathVariable String from, @PathVariable String to,
			@PathVariable double amount) {
		return service.fundTransfer(from, to, amount);
	}

	@GetMapping("/Account_GetAll")
	public ResponseStructure<List<Account>> fetchAll() {
		return service.fetchAll();
	}

	@DeleteMapping("/Account_Delete/{id}")
	public ResponseStructure<Account> deleteById(@PathVariable String id) {
		return service.deleteByID(id);
	}
	
	@GetMapping("/showBalance/{id}")
	public ResponseStructure<Account> showBalance(@PathVariable String id){
		return service.findById(id);
	}
}
