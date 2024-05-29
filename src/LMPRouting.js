import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LMPadmin from './LMPadmin'
import Managers from './Component/Managers'
import Empolyees from './Component/Empolyees'
import Projects from './Component/Projects'
import Dashboard from './Component/Dashboard'
import HR from './Component/HR'
import AddProjects from './Component/AddProjects'
import Leaves from './Component/Leaves'
import LeaveDetails from './Component/LeaveDetails'

const LMPRouting = () => {
    return (
        <>
            <BrowserRouter>
                <LMPadmin />
                <Routes>
                    <Route path='/' element={<Dashboard/>}></Route>
                    <Route path='/hr' element={<HR/>}></Route>
                    <Route path='/manager' element={<Managers/>}></Route>
                    <Route path='/employees' element={<Empolyees/>}></Route>
                    <Route path='/projects' element={<Projects/>}></Route>
                    <Route path='/addproject' element={<AddProjects/>}></Route>
                    <Route path='/leaves' element={<Leaves/>}></Route>
                    <Route path='/leavedetails' element={<LeaveDetails/>}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default LMPRouting