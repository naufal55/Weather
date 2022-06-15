import React from 'react'
import { Button, Col } from "react-bootstrap";

export default function Atmosphere(props) {
  return (
      <>
      <Button className="mx-5 mx-auto bg-transparent">
        <Col className="mt-4" md={3} sm={6}>
          <div style={{ fontSize: 13, width: "120px", paddingBottom: 0 }}>
            HUMIDITY
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "120px" }}>
            {props.humidity}
          </div>
          <br/>
        </Col>
      </Button>
      <Button className="bg-transparent">
        <Col className="text-center mt-4" md={5} sm={6}>
          <div className='text-center' style={{ fontSize: 13, width: "120px", paddingBottom: 0 }}>
            PRESSURE
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "120px" }}>
            {props.pressure}
          </div>
          <div style={{ fontSize: 17, width: "120px" }}>{props.udirect}</div>
        </Col>
      </Button>
      <Button className="mx-5 mx-auto bg-transparent">
        <Col className="mt-4" md={3} sm={6}>
          <div style={{ fontSize: 13, width: "120px", paddingBottom: 0 }}>
            RISING
          </div>
          <div style={{ fontWeight: "bold", fontSize: 40, width: "120px" }}>
            {props.rising}
          </div>
          <div style={{ fontSize: 17, width: "120px" }}>{props.uspeed}</div>
        </Col>
      </Button>
      <Button className="mx-5 mx-auto bg-transparent">
          <Col className="mt-4" md={3} sm={6}>
            <div style={{ fontSize: 13, width: "120px", paddingBottom: 0 }}>
              VISIBILITY
            </div>
            <div style={{ fontWeight: "bold", fontSize: 40, width: "120px" }}>
              {props.visibility}
            </div>
            <div style={{ fontSize: 17, width: "120px" }}>{props.uspeed}</div>
          </Col>
        </Button>
    </>
  )
}
