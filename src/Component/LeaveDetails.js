import axios from "axios";
import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import "../All Css/LeaveDetails.css";

const LeaveDetails = () => {
  const leaveDetails = useLocation().state;

  // const [selectedleave, setselectedleave] = useState("");
  // const [showUpdate, setshowUpdate] = useState("");

  // const [leaveStatus, setleaveStatus] = useState("");
  const [selectedStatus, setselectedStatus] = useState("");

  const UpdateStatus = async () => {
    let updatestatusdata = {
      leaveid: leaveDetails._id,
      LeaveStatus: selectedStatus,
    };
    try {
      const updatestatusResult = await axios.put(
        "http://localhost:5000/leavemanagementapi//updateleave",
        updatestatusdata
      );
      console.log(updatestatusResult);
      // setshowUpdate(false);
      alert("Leave Approved");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ marginTop: "80px" }} className="LeaveDetails">
      <div className="leaveDetails-div">
        <h2>Leave Details</h2>
        <div className="data-div">
          {/* <Row>
            <Col>
              <h6>Employee Name: {leaveDetails?.EmpId.UserName}</h6>
            </Col>
            <Col>
              <h6>
                Employee Designation: {leaveDetails?.EmpId.UserDesignation}
              </h6>
            </Col>
          </Row>

          <Row>
            <Col>
              <h6>Leave Title: {leaveDetails?.LeaveTitle}</h6>
            </Col>
            <Col>
              <h6>Leave Reason: {leaveDetails?.LeaveReason} </h6>
            </Col>
          </Row>

          <Row>
            <Col>
              <h6>Leave Type: {leaveDetails?.LeaveType}</h6>
            </Col>
            <Col>
              <h6>Leave Status: {leaveDetails?.LeaveStatus}</h6>
            </Col>
          </Row> */}
          <h6>Employee Name:- {leaveDetails?.EmpId.UserName}</h6>
          <h6>Employee Designation:- {leaveDetails?.UserDesignation}</h6>
          <h6>Leave Title:- {leaveDetails?.LeaveTitle}</h6>
          <h6>Leave Reason:- {leaveDetails?.LeaveReason} </h6>
          <h6>Leave Type:- {leaveDetails?.LeaveType}</h6>
          <h6>Leave Status:- {leaveDetails?.LeaveStatus}</h6>
          <div>
            <Form.Check
              type="radio"
              onChange={(e) => setselectedStatus(e.target.value)}
              value="Approved"
              label="Approved"
              name="status"
              inline
            ></Form.Check>

            <Form.Check
              type="radio"
              onChange={(e) => setselectedStatus(e.target.value)}
              value="Cancle"
              label="Cancle"
              name="status"
              inline
            ></Form.Check>
          </div>
          <button className="leaveDetails-btn" onClick={() => UpdateStatus()}>Approved Leave</button>
          {/* <Button
            onClick={() => {
              UpdateStatus();
              setselectedleave(leaveDetails);
              setshowUpdate(true);
            }}
          > 
            Leave Approved
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default LeaveDetails;
