import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap'
import '../All Css/HR.css'



const HR = () => {

  const [allHr, setallHr] = useState([])
  const [selectedHR, setselectedHR] = useState("")
  const [showSelected, setshowSelected] = useState("")

  const hrData = {
    UserDesignation: "HR"
  }


  useEffect(() => {
    axios.post("http://localhost:5000/leavemanagementapi/finddesig", hrData)
      .then((result) => {
        console.log("DATA", result.data);
        setallHr(result.data)
      }).catch((err) => {
        console.log(err);
      });
  }, [])


  return (
    <div className='AdminHR' style={{ marginTop: '80px' }}>
      <Container>
        <Row>
          {
            allHr.map((hr) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='AdminHR-card'>
                    <Card.Img className='HRcard-img' src={`http://localhost:5000${hr.UserImage}`}/>
                    <Card.Body>
                      <p>HR Name:- {hr.UserName}</p>
                      {/* <p>HR Email:- {hr.UserEmail}</p>
                      <p>HR Password:- {hr.UserPassword}</p>
                      <p>HR Mobile No:- {hr.UserMobileNo}</p>
                      <p>HR Salary:- {hr.UserSalary}</p>
                      <p>HR Date Of Birth:- {hr.UserDateOfBirth}</p> */}
                      <p>HR Designation:- {hr.UserDesignation}</p>
                      {/* <p>HR Department:- {hr.UserDepartment}</p>
                      <p>HR Joining Date:- {hr.UserJoiningDate}</p>
                      <p>HR Releaving Date:- {hr.UserReleavingDate}</p> */}
                    </Card.Body>

                    <button className='HRDetails-btn' onClick={() => {
                      setselectedHR(hr)
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
        <Modal.Header closeButton>HR Details</Modal.Header>
        <Modal.Body>
          <p> HR Email: {selectedHR.UserEmail}</p>
          <p> HR Password: {selectedHR.UserPassword}</p>
          <p> HR Mobile No: {selectedHR.UserMobileNo}</p>
          <p> HR Salary: {selectedHR.UserSalary}</p>
          <p> HR Date Of Birth: {selectedHR.UserDateOfBirth}</p>
          <p> HR Gender: {selectedHR. UserGender}</p>
          <p> HR Department: {selectedHR.UserDepartment}</p>
          <p> HR Joining Date: {selectedHR.UserJoiningDate}</p>
          {/* <p> HR Releaving Date: {selectedHR.UserReleavingDate}</p> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={() => setshowSelected(false)}>OK</Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default HR