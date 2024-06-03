import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "../All Css/Leaves.css";

const Leaves = () => {
  const navigator = useNavigate();

  const [allLeave, setallLeave] = useState([]);
  const [selectedLeave, setselectedLeave] = useState("");
  const [showSelected, setshowSelected] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/leavemanagementapi/allleave")
      .then((result) => {
        console.log("DATA", result.data);
        setallLeave(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div style={{ marginTop: "80px" }} className="Admin-Leaves">
      {/* <button className='AdminDetail-navigator' onClick={() => navigator('/leavedetails')}> Leave Details<IoArrowRedoCircleOutline size={30} className='svg'/></button> */}
      <Container>
        <Row>
          {allLeave.map((leave) => {
            return (
              <Col sm={12} md={9} lg={3}>
                <Card className="Adminleave-card">
                  <Card.Body>
                    <p>Leave Title:- {leave.LeaveTitle}</p>
                    <p>Leave Reason:- {leave.LeaveReason}</p>
                    <p>Leave Type:- {leave.LeaveType}</p>
                    {/* <p>{leave.LeaveStartDate}</p>
                    <p>{leave.LeaveEndDate}</p> */}
                    <p>Leave Applied Date:- {leave.LeaveAppliedDate}</p>
                    {/* <p>{leave.LeaveStatus}</p>
                    <p>{leave.LeavePeriod}</p>
                    <p>{leave.AdminResponse}</p> */}
                  </Card.Body>
                  <button className='leaveDetail-btn' onClick={() => navigator("/leavedetails", { state: leave })}>
                    Leave Details
                  </button>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Leaves;
