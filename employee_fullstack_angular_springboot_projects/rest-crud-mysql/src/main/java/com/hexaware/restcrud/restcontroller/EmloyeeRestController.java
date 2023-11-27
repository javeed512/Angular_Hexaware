package com.hexaware.restcrud.restcontroller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hexaware.restcrud.entities.Employee;
import com.hexaware.restcrud.exceptions.EmployeeNotFoundException;
import com.hexaware.restcrud.service.EmployeeServiceImp;
import com.hexaware.restcrud.service.IEmployeeService;

@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping("/api/employees")
public class EmloyeeRestController {

	@Autowired
	IEmployeeService service;

	@GetMapping("/get/{eid}")
	public ResponseEntity<String> getById(@PathVariable Long eid) {

		ResponseEntity<String> response = null;

		try {
			Employee emp = service.getEmloyeeById(eid);

			if (emp == null) {

				throw new EmployeeNotFoundException("Employee Not Found with Eid " + eid);
			} else {

				response = new ResponseEntity<String>(emp.toString(), HttpStatus.FOUND);

			}

		} catch (EmployeeNotFoundException e) {

			// e.printStackTrace();

			response = new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);

		}

		return response;

	}

	@GetMapping("/get/ename/{ename}")
	public Employee getByEname(@PathVariable String ename) {

		return service.getEmployeeByEname(ename);

	}

	@GetMapping("/get/salary/{salary}")
	public List<Employee> getBySalaryGT(@PathVariable double salary) {

		return service.getEmployeesBySalaryGT(salary);

	}

	@GetMapping("/get/sorted/{salary}")
	public List<Employee> getBySalaryGTSorted(@PathVariable double salary) {

		return service.getEmployeesGTSorted(salary);

	}

	@GetMapping("/get/sorted/doj")
	public List<Employee> getBySorted() {

		return service.getSorted();

	}

	@DeleteMapping("/delete/{eid}")
	public String deleteById(@PathVariable Long eid) {

		service.deleteEmployeeById(eid); // returns void

		return "Record Deleted";

	}

	@PostMapping(value = "/add", consumes = "application/json", produces = "application/json")
	public Employee addEmployee(@RequestBody Employee employee) {

		boolean isValid = EmployeeServiceImp.inputValidation(employee);

		Employee emp = null;

		if (isValid) {

			emp = service.insertEmployee(employee);

		}

		return emp;

	}

	@GetMapping(value = "/getall", produces = "application/json")
	public List<Employee> getAll() {

		return service.getAllEmployees();

	}

	@PutMapping(value = "/update", consumes = "application/json", produces = "application/json")
	public Employee updateEmployee(@Valid  @RequestBody Employee employee) {

		return service.updateEmployee(employee);

	}

}
