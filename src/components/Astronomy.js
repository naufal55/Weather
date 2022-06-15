import React from 'react'
import { Button, Col } from "react-bootstrap";

export default function Astronomy(props) {
  const rise = props.sunrise.split(" ")
  const set = props.sunset.split(" ")
  return (
    <>
    <Button className="mx-5 mx-auto bg-transparent">
      <Col className="mt-4" md={4} sm={6}>
        <div style={{ fontSize: 13, width: "100px", paddingBottom: 0 }}>
          SUNRISE
        </div>
        <div style={{ fontWeight: "bold", fontSize: 40, width: "100px" }}>
          {rise[0]}
        </div>
        <div style={{ fontSize: 17, width: "100px" }}>{rise[1]}</div>
      </Col>
    </Button>
    <Button className="mx-5 mx-auto bg-transparent">
      <Col className="mt-4" md={4} sm={6}>
        <div style={{ fontSize: 13, width: "100px", paddingBottom: 0 }}>
          SUNSET
        </div>
        <div style={{ fontWeight: "bold", fontSize: 40, width: "100px" }}>
          {set[0]}
        </div>
        <div style={{ fontSize: 17, width: "100px" }}>{set[1]}</div>
      </Col>
    </Button>
  </>
  )
}
