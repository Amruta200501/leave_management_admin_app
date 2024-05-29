import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../All Css/Projects.css'
import { IoArrowRedoCircleOutline } from "react-icons/io5";


const Projects = () => {

  const [allProject, setallProject] = useState([])
  const navigator = useNavigate()

  useEffect(() => {
    axios.get("http://localhost:5000/leavemanagementapi/allproject")
      .then((result) => {
        console.log("DATA", result.data)
        setallProject(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])


  return (
    <div className='AdminProjects' style={{ marginTop: '80px' }}>
      <button className='AdminProjectsNavigator-button' onClick={() => navigator("/addproject")}>Add Projects<IoArrowRedoCircleOutline size={30}/></button>
      <Container>
        <Row>
          {
            allProject.map((project) => {
              return (
                <Col sm={12} md={9} lg={3}>
                  <Card className='AdminProjects-card'>
                    <Card.Body>
                      <p>Project Title:- {project.ProjectTitle}</p>
                      <p>Project Description:- {project.ProjectDescription}</p>
                      <p>Project Status:- {project.ProjectStatus}</p>
                      <p>Project Start Date:- {project.ProjectStartDate}</p>
                      <p>Project End Date:- {project.ProjectEndDate}</p>
                    </Card.Body>
                  </Card>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </div>
  )
}

export default Projects