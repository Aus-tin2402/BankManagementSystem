package in.austinjose.Bank_Management_System.Respository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.austinjose.Bank_Management_System.DTO.Transcation;

public interface TranscationRepository extends JpaRepository<Transcation, Integer>{

}
