package in.austinjose.Bank_Management_System.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import in.austinjose.Bank_Management_System.DTO.Transcation;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;
import in.austinjose.Bank_Management_System.Service.TranscationService;

@CrossOrigin
@RestController
public class TranscationController {
@Autowired
private TranscationService service;
@GetMapping("/show-Transcation")
public ResponseStructure<List<Transcation>> showTranscation(){
	return service.getAll();
}
}
