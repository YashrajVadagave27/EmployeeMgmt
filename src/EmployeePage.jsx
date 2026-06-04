import { useEffect, useState } from "react"
import "./EmployeePage.css"

function EmployeePage() {

    const [employees, setEmployees] = useState([])

    const [id, setId] = useState("")
    const [name, setName] = useState("")
    const [salary, setSalary] = useState("")

    const [search, setSearch] = useState("")
    const [searchId, setSearchId] = useState("")

    // LOAD ALL EMPLOYEES
    function loadData() {
            // replce localhost with render api url
        // fetch("http://localhost:9090/employee1/getallemp1") 
        fetch("https://employeemgmt-9x0i.onrender.com/employee1/getallemp1")
            .then(res => {

                if (!res.ok) {

                    throw new Error("Failed To Load Data")
                }

                return res.json()
            })

            .then(data => {

                setEmployees(data)
            })

            .catch(error => {

                console.log(error)

                alert("Unable To Load Employees")
            })
    }

    // ADD EMPLOYEE
    function addEmployee() {

        if (name.trim() === "" || salary === "") {

            alert("Please Fill All Fields")
            return
        }

        const emp = {

            name: name,
            salary: Number(salary)
        }

        fetch("https://employeemgmt-9x0i.onrender.com/employee1/addemp1", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(emp)
        })

            .then(res => res.text())

            .then(data => {

                alert(data)

                loadData()

                clearFields()
            })

            .catch(error => {

                console.log(error)

                alert("Add Employee Failed")
            })
    }

    // EDIT EMPLOYEE
    function editEmployee(emp) {

        setId(emp.id)
        setName(emp.name)
        setSalary(emp.salary)
    }

    // UPDATE EMPLOYEE
    function updateEmployee() {

        if (id === "") {

            alert("Please Select Employee")
            return
        }

        const emp = {

            name: name,
            salary: Number(salary)
        }

        fetch("https://employeemgmt-9x0i.onrender.com/employee1/update/" + id, {

            method: "PUT",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(emp)
        })

            .then(res => res.text())

            .then(data => {

                alert(data)

                loadData()

                clearFields()
            })

            .catch(error => {

                console.log(error)

                alert("Update Failed")
            })
    }

    // DELETE EMPLOYEE
    function deleteEmployee(id) {

        const confirmDelete = window.confirm("Are You Sure To Delete ?")

        if (confirmDelete) {

            fetch("https://employeemgmt-9x0i.onrender.com/employee1/delete/" + id, {

                method: "DELETE"
            })

                .then(res => res.text())

                .then(data => {

                    alert(data)

                    loadData()
                })

                .catch(error => {

                    console.log(error)

                    alert("Delete Failed")
                })
        }
    }

    // SEARCH BY NAME
    function searchEmployee() {

    if (search.trim() === "") {

        loadData()
        return
    }

    fetch(`https://employeemgmt-9x0i.onrender.com/employee1/search/${search}`)

        .then(res => {

            if (!res.ok) {

                throw new Error("Search Failed")
            }

            return res.json()
        })

        .then(data => {

            setEmployees(data)
        })

        .catch(error => {

            console.log(error)

            alert("Search Failed")
        })
    }

    // SEARCH EMPLOYEE BY ID
    function getEmployeeById() {

        if (searchId === "") {

            alert("Please Enter ID")
            return
        }

        fetch("https://employeemgmt-9x0i.onrender.com/employee1/getemp1byid/" + searchId)

            .then(res => {

                if (!res.ok) {

                    throw new Error("Employee Not Found")
                }

                return res.json()
            })

            .then(data => {

                if (data.id) {

                    setEmployees([data])
                }
                else {

                    alert("Employee Not Found")
                }
            })

            .catch(error => {

                console.log(error)

                alert("Employee Not Found")
            })
    }

    // SORT SALARY ASC
    function sortAsc() {

    fetch("https://employeemgmt-9x0i.onrender.com/employee1/sortasc")

        .then(res => {

            if (!res.ok) {

                throw new Error("Sort Asc Failed")
            }

            return res.json()
        })

        .then(data => {

            setEmployees(data)
        })

        .catch(error => {

            console.log(error)

            alert("Sort Asc Failed")
        })
}

    // SORT SALARY DESC
    function sortDesc() {

    fetch("https://employeemgmt-9x0i.onrender.com/employee1/sortdesc")

        .then(res => {

            if (!res.ok) {

                throw new Error("Sort Desc Failed")
            }

            return res.json()
        })

        .then(data => {

            setEmployees(data)
        })

        .catch(error => {

            console.log(error)

            alert("Sort Desc Failed")
        })
}

    // CLEAR FIELDS
    function clearFields() {

        setId("")
        setName("")
        setSalary("")
    }

    useEffect(() => {

        loadData()

    }, [])

    return (

        <div className="container">

            {/* HEADER */}

            <div className="header-section">

                <h1 className="title">
                    All Employee Are Display At Bottom
                </h1>

                <button
                    className="refresh-btn"
                    onClick={loadData}
                >
                    Get All Employees
                </button>

            </div>

            {/* ADD UPDATE CARD */}

            <div className="card">

                <h2 className="section-title">
                    Add / Update Employee
                </h2>

                <div className="form-section">

                    <input
                        type="text"
                        placeholder="Enter Employee Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <input
                        type="number"
                        placeholder="Enter Employee Salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                    />

                </div>

                <div className="button-group">

                    <button
                        className="add-btn"
                        onClick={addEmployee}
                    >
                        Add Employee
                    </button>

                    <button
                        className="update-btn"
                        onClick={updateEmployee}
                    >
                        Update Employee
                    </button>

                </div>

            </div>

            {/* SEARCH CARD */}

            <div className="card">

                <h2 className="section-title">
                    Search Employee
                </h2>

                <div className="form-section">

                    <input
                        type="text"
                        placeholder="Search By Name"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        className="search-btn"
                        onClick={searchEmployee}
                    >
                        Search Name
                    </button>

                </div>

                <div className="form-section">

                    <input
                        type="number"
                        placeholder="Search By ID"
                        value={searchId}
                        onChange={(e) => setSearchId(e.target.value)}
                    />

                    <button
                        className="search-btn"
                        onClick={getEmployeeById}
                    >
                        Search ID
                    </button>

                </div>

            </div>

            {/* SORT CARD */}

            <div className="card">

                <h2 className="section-title">
                    Sort Employee Salary
                </h2>

                <div className="button-group">

                    <button
                        className="sort-btn"
                        onClick={sortAsc}
                    >
                        Salary Ascending
                    </button>

                    <button
                        className="sort-btn"
                        onClick={sortDesc}
                    >
                        Salary Descending
                    </button>

                </div>

            </div>

            {/* TABLE */}

            <div className="card">

                <h2 className="section-title">
                    Employee Records
                </h2>

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>

                                <th>ID</th>
                                <th>Name</th>
                                <th>Salary</th>
                                <th>Action</th>

                            </tr>

                        </thead>

                        <tbody>

                            {
                                employees.map(emp => (

                                    <tr key={emp.id}>

                                        <td>{emp.id}</td>

                                        <td>{emp.name}</td>

                                        <td>₹ {emp.salary}</td>

                                        <td>

                                            <button
                                                className="edit-btn"
                                                onClick={() => editEmployee(emp)}
                                            >
                                                Edit
                                            </button>

                                            <button
                                                className="delete-btn"
                                                onClick={() => deleteEmployee(emp.id)}
                                            >
                                                Delete
                                            </button>

                                        </td>

                                    </tr>
                                ))
                            }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>
    )
}

export default EmployeePage