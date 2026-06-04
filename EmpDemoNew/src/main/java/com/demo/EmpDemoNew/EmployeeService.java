package com.demo.EmpDemoNew;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
public class EmployeeService {

    @Autowired
    EmployeeRepository emprepo;

    // ADD
    public Employee addEmployee(Employee emp) {

        return emprepo.save(emp);
    }

    // GET BY ID
    public Optional<Employee> getEmployeeById(int id) {

        return emprepo.findById(id);
    }

    // GET ALL
    public List<Employee> getAllEmployee() {

        return emprepo.findAll();
    }

    // UPDATE
    public Employee updateEmployee(int id, Employee emp) {

        Employee oldemp = emprepo.findById(id).orElse(null);

        if (oldemp != null) {

            oldemp.setName(emp.getName());
            oldemp.setSalary(emp.getSalary());

            return emprepo.save(oldemp);
        }

        return null;
    }

    // DELETE
    public void deleteEmployee(int id) {

        emprepo.deleteById(id);
    }

    // SEARCH EMPLOYEE
    public List<Employee> searchEmployee(String name) {

        return emprepo.findByNameContainingIgnoreCase(name);
    }

    // SORT ASC
    public List<Employee> sortSalaryAsc() {

        return emprepo.findAll(
                Sort.by(Sort.Direction.ASC, "salary"));
    }

    // SORT DESC
    public List<Employee> sortSalaryDesc() {

        return emprepo.findAll(
                Sort.by(Sort.Direction.DESC, "salary"));
    }
}