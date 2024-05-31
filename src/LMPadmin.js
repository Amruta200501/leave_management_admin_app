import React, { useState } from 'react'
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from "react-icons/fa6";
import '../src/All Css/AdminOffcanva.css'
import Employees  from '../src/Admin  img/icons8-employee-50.png';
import HR from '../src/Admin  img/icons8-people-50.png'
import Manager from '../src/Admin  img/icons8-manager-50.png'
import Dashboard from '../src/Admin  img/icons8-dashboard-50.png'
import Project from '../src/Admin  img/icons8-projects-50.png'
import Bars from '../src/Admin  img/icons8-bars-64.png'
import Leaves from '../src/Admin  img/icons8-leave-50.png'

const LMPadmin = () => {
    const [isShow, setisShow] = useState(false)
    const handleShow = () => { setisShow(true) }
    const handlehide = () => { setisShow(false) }
    return (
        <>
            <Navbar expand='lg' sticky='top' fixed='top' className='Admin-navbar'>
                <Container>
                    <Navbar.Brand className='Adminnav-brand'>
                        <img src={Bars} onClick={() => handleShow()}  /> <div style={{ color: 'white', marginTop:'15px' }}>Leave Management Admin Portal</div>
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Offcanvas show={isShow} onHide={handlehide} className='admin-Offcanva'>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className='flex-column'>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/' className='nav-link'><img src={Dashboard} className='image' />   DashBoard</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/hr' className='nav-link'><img src={HR} className='image' />   HR</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/manager' className='nav-link'><img src={Manager} className='image' />   Managers</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/employees' className='nav-link'><img src={Employees} className='image' />   Employees</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/projects' className='nav-link'><img src={Project} className='image' />   Projects</Link>
                        </Nav.Link>
                        <Nav.Link onClick={() => handlehide()}>
                            <Link to='/leaves' className='nav-link'><img src={Leaves} className='image' />  Leaves</Link>
                        </Nav.Link>
                    </Nav>
                </Offcanvas.Body>
            </Offcanvas>

        </>
    )
}

export default LMPadmin