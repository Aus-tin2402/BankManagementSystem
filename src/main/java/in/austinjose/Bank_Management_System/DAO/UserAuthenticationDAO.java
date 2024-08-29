package in.austinjose.Bank_Management_System.DAO;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.austinjose.Bank_Management_System.DTO.UserAuthentication;
import in.austinjose.Bank_Management_System.Respository.UserAuthenticationRepository;

@Repository
public class UserAuthenticationDAO {
	@Autowired
	private UserAuthenticationRepository repository;

	public UserAuthentication save(UserAuthentication authentication) {
		return repository.save(authentication);
	}

	public List<UserAuthentication> fetchAll() {
		return repository.findAll();
	}

	public UserAuthentication fetchByContact(long contact) {
		return repository.findByContact(contact);
	}

	public UserAuthentication findById(String id) {
		Optional<UserAuthentication> optional = repository.findById(id);
		if (optional.isPresent())
			return optional.get();
		return null;
	}

	public void deleteById(String id) {
		repository.deleteById(id);
	}
}
