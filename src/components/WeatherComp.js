import React from "react";
import { Button, Col } from "react-bootstrap";
import { CaretDownFill, CaretUpFill } from "react-bootstrap-icons";

export default function WeatherComp(props) {
  return (
    <Button className="mx-5 mx-auto bg-transparent">
      <Col className="mt-5" md={2} sm={6}>
        <div>
          <img
            style={{ width: "60px", height: "60px", objectFit: "cover" }}
            src={props.src}
            alt="current-weather"
            />
        </div>
        <div style={{ fontSize: 10, width:"60px", }}>{props.day}</div>
        <div style={{ fontSize: 10, width:"60px", }}>{props.date}</div>
        <div className="d-flex flex-row gap-3 mt-2">
          <Col>
            <CaretUpFill />
            <div>{props.high}&deg;</div>
          </Col>
          <Col>
            <CaretDownFill />
            <div>{props.low}&deg;</div>
          </Col>
        </div>
      </Col>
    </Button>
  );
}
