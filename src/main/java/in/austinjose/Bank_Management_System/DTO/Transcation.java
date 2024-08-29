package in.austinjose.Bank_Management_System.DTO;

import org.springframework.beans.factory.annotation.Autowired;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Transcation {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int transcationId;
//	private double bal;
	private double amount;
	private String type;

	public int getTranscationId() {
		return transcationId;
	}

	public void setTranscationId(int transcationId) {
		this.transcationId = transcationId;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {

		this.amount = amount;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

}
