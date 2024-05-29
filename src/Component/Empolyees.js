import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import '../All Css/Employee.css'


const Empolyees = () => {

  const [allEmployees, setallEmployees] = useState([])
  const [selectedEmployees, setselectedEmployees] = useState(" ")
  const [showSelected, setshowSelected] = useState("")

  const employeesData = {
    UserDesignation: "Employee"
  }

  useEffect(() => {
    axios.post("http://localhost:5000/leavemanagementapi/finddesig", employeesData)
      .then((result) => {
        console.log("DATA", result.data);
        setallEmployees(result.data)
      }).catch((err) => {
        console.log(err);
      });

  }, [])


  return (
    <div className='AdminEmp' style={{ marginTop: '80px' }}>
      <Container>
        <Row>
          {
            allEmployees.map((employees) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='AdminEmp-card'>
                  <Card.Img className='employeecard-img' src={`http://localhost:5000${employees.UserImage}`}/>
                    <Card.Body>
                      <p>Employee Name:- {employees.UserName}</p>
                      {/* <p>Employee Email:- {employees.UserEmail}</p>
                      <p>Employee Password:- {employees.UserPassword}</p>
                      <p>Employee Mobile No:- {employees.UserMobileNo}</p>
                      <p>Employee Salary:- {employees.UserSalary}</p>
                      <p>Employee Date Of Birth:- {employees.UserDateOfBirth}</p> */}
                      <p>Employee Designation:- {employees.UserDesignation}</p>
                      {/* <p>Employee Department:- {employees.UserDepartment}</p>
                      <p>Employee Joining Date:- {employees.UserJoiningDate}</p>
                      <p>Employee Releaving Date:- {employees.UserReleavingDate}</p> */}
                    </Card.Body>

                    <button className='employeeDetails-btn' onClick={() => {
                      setselectedEmployees(employees)
                      setshowSelected(true)
                    }}>Show Details</button>

                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>

      <Modal show={showSelected} onHide={() => setshowSelected(false)}>
        <Modal.Header closeButton>Employee Details</Modal.Header>
        <Modal.Body>
          <p> Employee Email: {selectedEmployees.UserEmail}</p>
          <p> Employee Password: {selectedEmployees.UserPassword}</p>
          <p> Employee Mobile No: {selectedEmployees.UserMobileNo}</p>
          <p> Employee Salary: {selectedEmployees.UserSalary}</p>
          <p> Employee Date Of Birth: {selectedEmployees.UserDateOfBirth}</p>
          <p> Employee Gender: {selectedEmployees. UserGender}</p>
          <p> Employee Department: {selectedEmployees.UserDepartment}</p>
          <p> Employee Joining Date: {selectedEmployees.UserJoiningDate}</p>
          <p> Employee Releaving Date: {selectedEmployees.UserReleavingDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
        </Modal.Footer>
      </Modal>


    </div>
  )
}

export default Empolyees