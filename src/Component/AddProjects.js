import axios from 'axios'
import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import '../All Css/AddProject.css'


const AddProjects = () => {
    const [projectTitle, setprojectTitle] = useState("")
    const [projectDescription, setprojectDescription] = useState("")
    const [projectStatus, setprojectStatus] = useState("")
    const [projectStartDate, setprojectStartDate] = useState("")
    const [projectEndDate, setprojectEndDate] = useState("")

    const addproject = async () => {
        const addData = {
            ProjectTitle: projectTitle,
            ProjectDescription: projectDescription,
            ProjectStatus: projectStatus,
            ProjectStartDate: projectStartDate,
            ProjectEndDate: projectEndDate
        }
        try {
            const addresult = await axios.post("http://localhost:5000/leavemanagementapi/addproject", addData)
            console.log("data", addresult.data)
            alert("Project Added")
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='addprojects-Container' style={{marginTop:'80px'}}>
            <div className='addprojects-Form'>
                <Form>
                    <h2>Add Projects Here</h2>
                    <Row>
                        <Col>
                            <div className='adminproject-div'>
                                <label>Project Title :-</label>
                            </div>
                            <div>
                                <input
                                    className='adminproject-input'
                                    type='text'
                                    placeholder='Enter Project Title'
                                    onChange={(e) => setprojectTitle(e.target.value)}
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className='adminproject-div'>
                                <label>Project Description :-</label>
                            </div>
                            <div>
                                <input
                                    className='adminproject-input'
                                    type='text'
                                    placeholder='Enter Project Description'
                                    onChange={(e) => setprojectDescription(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='adminproject-div'>
                                <label>Project Status:-</label>
                            </div>
                            <div>
                                <input
                                    className='adminproject-input'
                                    type='text'
                                    placeholder='Enter Project Status'
                                    onChange={(e) => setprojectStatus(e.target.value)}
                                />
                            </div>
                        </Col>

                        <Col>
                            <div className='adminproject-div'>
                                <label>Project Start Date :-</label>
                            </div>
                            <div>
                                <input
                                    className='adminproject-input'
                                    type='date'
                                    placeholder='Enter Project Start Date'
                                    onChange={(e) => setprojectStartDate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <div className='adminproject-div'>
                                <label>Project End Date :-</label>
                            </div>
                            <div>
                                <input
                                    className='adminproject-input'
                                    type='date'
                                    placeholder='Enter Project End  Date'
                                    onChange={(e) => setprojectEndDate(e.target.value)}
                                />
                            </div>
                        </Col>
                    </Row>
                    <button className='addproject-btn' onClick={() => addproject()}>Submit</button>
                </Form>
            </div>
        </div>
    )
}

export default AddProjects