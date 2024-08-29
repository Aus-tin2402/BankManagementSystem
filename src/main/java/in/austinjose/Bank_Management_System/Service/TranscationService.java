package in.austinjose.Bank_Management_System.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import in.austinjose.Bank_Management_System.DAO.TranscationDAO;
import in.austinjose.Bank_Management_System.DTO.Transcation;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;

@Service
public class TranscationService {
	@Autowired
	private TranscationDAO dao;

	public ResponseStructure<List<Transcation>> getAll() {
		ResponseStructure<List<Transcation>> structure = new ResponseStructure<List<Transcation>>();
		structure.setData(dao.getAll());
		structure.setMsg("Transcation");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}
}
