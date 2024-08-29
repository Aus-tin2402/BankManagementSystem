package in.austinjose.Bank_Management_System.Service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import in.austinjose.Bank_Management_System.DAO.AccountDAO;
import in.austinjose.Bank_Management_System.DTO.Account;
import in.austinjose.Bank_Management_System.DTO.Transcation;
import in.austinjose.Bank_Management_System.ResponseStructure.ResponseStructure;

@Service
public class AccountService {
	@Autowired
	private AccountDAO dao;

	public ResponseStructure<Account> deposit(String id, double amount) {
		Account account = dao.fetchById(id);
		ResponseStructure<Account> structure = new ResponseStructure<Account>();
		if (account != null) {
			Transcation transcation = new Transcation();
			transcation.setAmount(amount);
			double bal = account.getBal() + amount;
//			System.out.println(bal);
			transcation.setType("DEPOSIT");
			List<Transcation> list = account.getList() != null ? account.getList() : new ArrayList<Transcation>();
			list.add(transcation);
			account.setList(list);
			account.setBal(bal);
			structure.setData(dao.save(account));
			structure.setMsg("Deposited Sucessfylly");
			structure.setStatus(HttpStatus.OK.value());
			return structure;

		} else {
			structure.setData(null);
			structure.setMsg("Account Does'nt Exist");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}

	public ResponseStructure<Account> withdrawal(String id, double amount) {
		Account account = dao.fetchById(id);
		ResponseStructure<Account> structure = new ResponseStructure<Account>();
		if (account != null && account.getBal() >= amount) {
			Transcation transcation = new Transcation();
			transcation.setAmount(amount);
			double bal = account.getBal() - amount;
			transcation.setType("WITHDRAWAL");
			List<Transcation> list = account.getList() != null ? account.getList() : new ArrayList<Transcation>();
			list.add(transcation);
			account.setList(list);
			account.setBal(bal);
			structure.setData(dao.save(account));
			structure.setMsg("Withdrawal Sucessfylly");
			structure.setStatus(HttpStatus.OK.value());
			return structure;
		} else {
			structure.setData(null);
			structure.setMsg("Withdrawal Failed");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}

	public ResponseStructure<Account> fundTransfer(String fromid, String toid, double amount) {
		Account fromaccount = dao.fetchById(fromid);
		Account toaccount = dao.fetchById(toid);
		ResponseStructure<Account> structure = new ResponseStructure<Account>();
		if (fromaccount != null && toaccount != null && fromaccount.getBal() >= amount) {
			double frombal = fromaccount.getBal() - amount;
			double tobal = toaccount.getBal() + amount;
			Transcation from = new Transcation();
			from.setAmount(amount);
			from.setType("WITHDRAWAL");
			Transcation to = new Transcation();
			to.setAmount(amount);
			to.setType("DEPOSIT");
			List<Transcation> fromlist = fromaccount.getList() != null ? fromaccount.getList()
					: new ArrayList<Transcation>();
			fromlist.add(from);
			List<Transcation> tolist = toaccount.getList() != null ? toaccount.getList() : new ArrayList<Transcation>();
			tolist.add(to);
			fromaccount.setBal(frombal);
			toaccount.setBal(tobal);
			dao.save(toaccount);
			structure.setData(dao.save(fromaccount));
			structure.setMsg("Fund Transfer Sucessfully ");
			structure.setStatus(HttpStatus.OK.value());
			return structure;
		} else {
			structure.setData(null);
			structure.setMsg("Fund Transfer Failed");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}

	public ResponseStructure<List<Account>> fetchAll() {
		ResponseStructure<List<Account>> structure = new ResponseStructure<List<Account>>();
		structure.setData(dao.fetchAll());
		structure.setMsg("Data Fetched Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}

	public ResponseStructure<Account> deleteByID(String id) {
		Account account = dao.fetchById(id);
		ResponseStructure<Account> structure = new ResponseStructure<Account>();
		if (account != null) {
			structure.setData(account);
			structure.setMsg("Data Deleted Sucessfully");
			structure.setStatus(HttpStatus.OK.value());
			dao.deleteById(id);
			return structure;
		} else {
			structure.setData(null);
			structure.setMsg("Data Not Found");
			structure.setStatus(HttpStatus.NO_CONTENT.value());
			return structure;
		}
	}
	
	public ResponseStructure<Account> findById(String id){
		ResponseStructure<Account> structure=new ResponseStructure<Account>();
		structure.setData(dao.fetchById(id));
		structure.setMsg("Data Find Sucessfully");
		structure.setStatus(HttpStatus.OK.value());
		return structure;
	}
}
