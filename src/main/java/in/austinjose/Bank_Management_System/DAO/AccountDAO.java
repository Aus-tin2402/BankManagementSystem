package in.austinjose.Bank_Management_System.DAO;

import java.util.List;
import java.util.Optional;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.austinjose.Bank_Management_System.DTO.Account;
import in.austinjose.Bank_Management_System.Respository.AccountRepository;

@Repository
public class AccountDAO {
//	public static final Random RANDOM = new Random();
	@Autowired
	private AccountRepository repository;

	public Account fetchById(String id) {
		Optional<Account> optional = repository.findById(id);
		if (optional.isPresent()) {
			return optional.get();
		}
		return null;
	}

	public Account save(Account account) {

		return repository.save(account);
	}

	public List<Account> fetchAll() {
		return repository.findAll();
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
