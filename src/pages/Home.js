import React, { useState } from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import {
  partlyCloudly,
  mostlyCloudly,
  cloudly,
  breezy,
  scatteredShowers,
  rain,
} from "../assets/img";
import dateFormat from "dateformat";
import { WeatherComp, Wind, Astronomy, Atmosphere } from "./../components";

import "./../assets/custom.css";
import weather from "./../assets/data/weather.json";

const { units, location, wind, astronomy, atmosphere, item } =
  weather.query.results.channel;

export default function Home() {
  const list = item?.forecast?.map((item, index) => {
    let gambar = "Breezy";

    if (item.text === "Breezy") {
      gambar = breezy;
    } else if (item.text === "Partly Cloudy") {
      gambar = partlyCloudly;
    } else if (item.text === "Cloudy") {
      gambar = cloudly;
    } else if (item.text === "Scattered Showers") {
      gambar = scatteredShowers;
    } else if (item.text === "Mostly Cloudy") {
      gambar = mostlyCloudly;
    } else if (item.text === "Rain") {
      gambar = rain;
    }
    return (
      <WeatherComp
        key={index}
        src={gambar}
        day={item.day}
        date={item.date}
        high={item.high}
        low={item.low}
      />
    );
  });

  const [component, setComponent] = useState(list);

  const handleSelect = (eventKey) => {
    if (eventKey === "link-1") {
      setComponent(list);
    } else if (eventKey === "link-2") {
      setComponent(
        <Wind
          chill={wind.chill}
          direct={wind.direction}
          speed={wind.speed}
          uspeed={units.speed}
          udirect={units.distance}
        />
      );
    } else if (eventKey === "link-3") {
      setComponent(
        <Atmosphere
          humidity={atmosphere.humidity}
          pressure={atmosphere.pressure}
          rising={atmosphere.rising}
          visibility={atmosphere.visibility}
          uspeed={units.speed}
          udirect={units.distance}
        />
      );
    } else if (eventKey === "link-4") {
      setComponent(<Astronomy sunrise={astronomy.sunrise} sunset={astronomy.sunset} />);
    }
  };

  return (
    <>
      <Container>
        <Row>
          <Col md={12} className="text-white text-center">
            <h4 className="mt-3">{location.city}</h4>
            <p style={{ fontSize: 12 }}>
              {location.city}, {location.region}, {location.country}
            </p>
            <div>
              <img
                style={{ width: "200px", height: "130px", objectFit: "cover" }}
                src={partlyCloudly}
                alt="current-weather"
              />
            </div>
            <div>
              {dateFormat(item.condition.date, "dddd, mmmm dS, yyyy")}
              <br />
              {dateFormat(item.condition.date, "h:MM:ss TT")}
            </div>
            <div className="d-flex flex-row fw-bold justify-content-center mb-0">
              <div style={{ fontSize: 60 }}>{item.condition.temp}</div>
              <div className="pt-3">&deg;{units.temperature}</div>
            </div>
            <div className="fs-4 mb-1">{item.condition.text}</div>
          </Col>
          <Nav
            className="justify-content-center"
            variant="tabs"
            defaultActiveKey="link-1"
            onSelect={handleSelect}
          >
            <Nav.Item>
              <Nav.Link className="bg-transparent" eventKey="link-1">
                Weather
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="bg-transparent" eventKey="link-2">
                Wind
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="bg-transparent" eventKey="link-3">
                Atmosphere
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link className="bg-transparent" eventKey="link-4">
                Astronomy
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Col md={12} className="text-white text-center">
            {component}
          </Col>
        </Row>
      </Container>
    </>
  );
}
