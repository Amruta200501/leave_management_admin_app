import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import '../All Css/Managers.css'



const Managers = () => {

  const [allManagers, setallManagers] = useState([])
  const [selectedManagers, setselectedManagers] = useState("")
  const [showSelected, setshowSelected] = useState("")


  const managerData = {
    UserDesignation: "Manager"
  }

  useEffect(() => {
    axios.post("http://localhost:5000/leavemanagementapi/finddesig", managerData)
      .then((result) => {
        console.log("DATA", result.data);
        setallManagers(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <div className='AdminManagers' style={{ marginTop: '80px' }} >
      <Container>
        <Row>
          {
            allManagers.map((manager) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='AdminManagers-card'>
                    <Card.Img className='Managercard-img' src={`http://localhost:5000${manager.UserImage}`} />
                    <Card.Body>
                      <p>Manager Name:- {manager.UserName}</p>
                      {/* <p>Manager Email:- {manager.UserEmail}</p>
                      <p>Manager Password:- {manager.UserPassword}</p>
                      <p>Manager Mobile No:- {manager.UserMobileNo}</p>
                      <p>Manager Salary:- {manager.UserSalary}</p>
                      <p>Manager Date Of Birth:- {manager.UserDateOfBirth}</p> */}
                      <p>Manager Designation:- {manager.UserDesignation}</p>
                      {/* <p>Manager Department:- {manager.UserDepartment}</p>
                      <p>ManagerJoining Date:- {manager.UserJoiningDate}</p>
                      <p>Manager Releaving Date:- {manager.UserReleavingDaate}</p> */}
                    </Card.Body>

                    <button className='Managerdetails-btn' onClick={() => {
                      setselectedManagers(manager)
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
        <Modal.Header closeButton>Managers Details</Modal.Header>
        <Modal.Body>
          <p> Manager Email: {selectedManagers.UserEmail}</p>
          <p> Manager Password: {selectedManagers.UserPassword}</p>
          <p> Manager Mobile No: {selectedManagers.UserMobileNo}</p>
          <p> Manager Salary: {selectedManagers.UserSalary}</p>
          <p> Manager Date Of Birth: {selectedManagers.UserDateOfBirth}</p>
          <p> Manager Gender: {selectedManagers. UserGender}</p>
          <p> Manager Department: {selectedManagers.UserDepartment}</p>
          <p> Manager Joining Date: {selectedManagers.UserJoiningDate}</p>
          <p> Manager Releaving Date: {selectedManagers.UserReleavingDate}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Managers