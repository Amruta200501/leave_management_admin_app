import React from 'react'
import { useLocation } from 'react-router-dom'


const LeaveDetails = () => {

  const leaveDetails = useLocation().state
  return (
    <div style={{ marginTop: '80px' }} className='LeaveDetails'>
      <div>
        <h4>Employee Name: {leaveDetails?.EmpId.UserName}</h4>
        <h4>Employee Designation: {leaveDetails?.UserDesignation}</h4>
        <h4>Leave Title:  {leaveDetails?.LeaveTitle}</h4>
        <h4>Leave Reason: {leaveDetails?.LeaveReason} </h4>
        <h4>Leave Type: {leaveDetails?.LeaveType}</h4>
        <h4>Leave Status: {leaveDetails?.LeaveStatus}</h4>
      </div>
    </div>
  )
}

export default LeaveDetails