import React from "react";
import { Button, Col } from "react-bootstrap";

export default function wind(props) {
  return (
    <>
      <Button className="mx-5 mx-auto bg-transparent">
        <Col className="mt-4" md={4} sm={6}>
          <div style={{ fontSize: 13, width: "80px", paddingBottom: 0 }}>
            CHILL
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "80px" }}>
            {props.chill}
          </div>
          <br/>
        </Col>
      </Button>
      <Button className="mx-5 mx-auto bg-transparent">
        <Col className="mt-4" md={4} sm={6}>
          <div style={{ fontSize: 13, width: "80px", paddingBottom: 0 }}>
            DIRECTION
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "80px" }}>
            {props.direct}
          </div>
          <div style={{ fontSize: 17, width: "80px" }}>{props.udirect}</div>
        </Col>
      </Button>
      <Button className="mx-5 mx-auto bg-transparent">
        <Col className="mt-4" md={4} sm={6}>
          <div style={{ fontSize: 13, width: "80px", paddingBottom: 0 }}>
            SPEED
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "80px" }}>
            {props.speed}
          </div>
          <div style={{ fontSize: 17, width: "80px" }}>{props.uspeed}</div>
        </Col>
      </Button>
    </>
  );
}
