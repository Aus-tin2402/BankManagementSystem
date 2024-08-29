package in.austinjose.Bank_Management_System.Respository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.austinjose.Bank_Management_System.DTO.Admin;

public interface AdminRepository extends JpaRepository<Admin, String> {
	public Admin findByContact(long contact);
}
