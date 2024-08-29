package in.austinjose.Bank_Management_System.DAO;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import in.austinjose.Bank_Management_System.DTO.Transcation;
import in.austinjose.Bank_Management_System.Respository.TranscationRepository;

@Repository
public class TranscationDAO {
	@Autowired
	private TranscationRepository repository;

	public List<Transcation> getAll() {
		return repository.findAll();
	}
}
