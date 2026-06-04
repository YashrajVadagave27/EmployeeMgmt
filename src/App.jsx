import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

import Home from "./Home"
import EmployeePage from "./EmployeePage"
import About from "./About"
import Contact from "./Contact"

function App(){

  return(

    <>

      <nav style={{

        background:"#24292e",
        padding:"15px",
        display:"flex",
        justifyContent:"space-between"
      }}>

        <h2 style={{color:"white"}}>

          Employee Management System

        </h2>

        <ul style={{

          display:"flex",
          gap:"20px",
          listStyle:"none"
        }}>

          <li>
            <Link to="/" style={{color:"white"}}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/employee" style={{color:"white"}}>
              Employee
            </Link>
          </li>

          <li>
            <Link to="/about" style={{color:"white"}}>
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" style={{color:"white"}}>
              Contact
            </Link>
          </li>

        </ul>

      </nav>

      <Routes>

        <Route path="/" element={<Home/>} />

        <Route path="/employee" element={<EmployeePage/>} />

        <Route path="/about" element={<About/>} />

        <Route path="/contact" element={<Contact/>} />

      </Routes>

    </>
  )
}

export default App