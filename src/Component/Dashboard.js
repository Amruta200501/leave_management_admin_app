import React from 'react'
import '../All Css/Dashboard.css'
import HRicon from '../Adminimg/icons8-people-50.png'
import Managericon from '../Adminimg/icons8-manager-50.png'
import Employeeicon from '../Adminimg/icons8-employee-50.png'
import Projecticon from '../Adminimg/icons8-projects-50.png'

const Dashboard = () => {
  return (
    <div style={{ marginTop: '80px' }} className='Dashboard'>
      <div className='Dashboard-card'>
        <div className='card-inner'>
          <h3>HR</h3>
          <h1>10</h1>
        </div>
        <img src={HRicon} className='card-icon' /> 
      </div>
      <div className='Dashboard-card'>
        <div className='card-inner'>
          <h3>Managers</h3>
          <h1>10</h1>
        </div>
        <img src={Managericon} className='card-icon' /> 
      </div>

      <div className='Dashboard-card'>
        <div className='card-inner'>
          <h3>Employees</h3>
          <h1>10</h1>
        </div>
        <img src={Employeeicon} className='card-icon' /> 
      </div>

      <div className='Dashboard-card'>
        <div className='card-inner'>
          <h3>Projects</h3>
          <h1>10</h1>
        </div>
        <img src={Projecticon} className='card-icon' /> 
      </div>

    </div>

  )
}

export default Dashboard