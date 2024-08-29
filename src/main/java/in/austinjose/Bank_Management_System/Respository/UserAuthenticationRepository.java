package in.austinjose.Bank_Management_System.Respository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.austinjose.Bank_Management_System.DTO.UserAuthentication;

public interface UserAuthenticationRepository
		extends JpaRepository<UserAuthentication, String> {
	public UserAuthentication findByContact(long contact);
}
