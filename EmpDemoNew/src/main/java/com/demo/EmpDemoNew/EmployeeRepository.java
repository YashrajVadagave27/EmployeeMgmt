package com.demo.EmpDemoNew;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

    // SEARCH BY NAME
    List<Employee> findByNameContainingIgnoreCase(String name);

}