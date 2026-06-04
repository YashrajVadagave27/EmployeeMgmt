package com.demo.EmpDemoNew;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/employee1")
public class EmployeeController {

    @Autowired
    EmployeeService empser;

    // ADD
    @PostMapping("/addemp1")
    public String addEmployee(@RequestBody Employee emp) {

        empser.addEmployee(emp);

        return "Employee Added Successfully";
    }

    // GET BY ID
    @GetMapping("/getemp1byid/{id}")
    public Optional<Employee> getEmployeeById(@PathVariable int id) {

        return empser.getEmployeeById(id);
    }

    // GET ALL
    @GetMapping("/getallemp1")
    public List<Employee> getAllEmployee() {

        return empser.getAllEmployee();
    }

    // UPDATE
    @PutMapping("/update/{id}")
    public String updateEmployee(
            @PathVariable int id,
            @RequestBody Employee emp) {

        Employee updated = empser.updateEmployee(id, emp);

        if (updated != null) {

            return "Employee Updated Successfully";
        }

        return "Employee Not Found";
    }

    // DELETE
    @DeleteMapping("/delete/{id}")
    public String deleteEmployee(@PathVariable int id) {

        empser.deleteEmployee(id);

        return "Employee Deleted Successfully";
    }

    // SEARCH
    @GetMapping("/search/{name}")
    public List<Employee> searchEmployee(
            @PathVariable String name) {

        return empser.searchEmployee(name);
    }

    // SORT ASC
    @GetMapping("/sortasc")
    public List<Employee> sortAsc() {

        return empser.sortSalaryAsc();
    }

    // SORT DESC
    @GetMapping("/sortdesc")
    public List<Employee> sortDesc() {

        return empser.sortSalaryDesc();
    }
}