package com.hexaware.restcrud.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;

import com.hexaware.restcrud.entities.Employee;
import com.hexaware.restcrud.exceptions.EmployeeNotFoundException;
import com.hexaware.restcrud.repository.EmployeeRepository;

@Service
public class EmployeeServiceImp implements IEmployeeService {
	
	
	@Autowired
	EmployeeRepository repo;
	
	
	
	public static boolean  inputValidation(Employee emp) {
		
		 boolean flag = false;
		
			if(emp.getEname().length() > 3 && emp.getSalary() > 5000) {
				
				flag =true;
				
			}
		
		
		return flag;
		
	}
	
	
	

	@Override
	public Employee insertEmployee(Employee employee) {
		
		return repo.save(employee);
	}

	@Override
	public List<Employee> getAllEmployees() {

		
		return repo.findAll();
	}

	@Override
	public Employee updateEmployee(Employee employee) {
	
		return repo.save(employee);
	}

	@Override
	public Employee getEmloyeeById(Long eid) throws EmployeeNotFoundException {
	
		return repo.findById(eid).orElse(null);
	}

	@Override
	public void deleteEmployeeById(Long eid) {
		 
		    repo.deleteById(eid);
		
	}

	@Override
	public Employee getEmployeeByEname(String ename) {
	
		return repo.findByEname(ename);
	}

	@Override
	public List<Employee> getEmployeesBySalaryGT(double salary) {
	
		return repo.findBySalaryGreaterThan(salary);
	}

	@Override
	public List<Employee> getEmployeesGTSorted(double salary) {
		// TODO Auto-generated method stub
		return repo.getEmployeesSorted(salary);
	}

	@Override
	public List<Employee> getSorted() {
		
		//return  repo.findAll(Sort.by("doj"));// select * from employee_details order by doj;
		
		return	repo.findAll(Sort.by(Direction.DESC, "doj"));
	}

}
