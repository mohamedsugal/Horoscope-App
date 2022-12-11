import React, { useState } from "react";
import { Container, Alert, Form, Button, Col, Row } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [horoscopeSign, setHoroscopeSign] = useState("aries");

  const flushData = (e: React.ChangeEvent<any>) => {
    e.preventDefault();
    let request = {
      name: name,
      horoscope_sign: horoscopeSign,
    };
    axios
      .post("/user-details", JSON.stringify(request), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => console.log(response))
      .catch((err) => {
        console.log(err.response.request._response);
      });
    console.log(JSON.stringify(request));
    setName("");
    setHoroscopeSign("aries");
  };

  return (
    <Container>
      <h2 style={{ marginTop: "1em", marginBottom: "20px" }}>Horoscope</h2>
      <Alert variant="primary" className="col-md-6">
        {/* prettier-ignore */}
        <p>This App Provides horoscope info for sun signs such as Lucky Number, Lucky Color,
                    Mood, Color, Compatibility with other sun signs, description of a sign for that day, etc.</p>
        <hr />
        <p>
          POC: @mohamedsugal, @abdifatahdev
          <img
            className={"logo-img"}
            src={require("../images/logo.png")}
            alt=""
          />
        </p>
      </Alert>
      <Form onSubmit={flushData} className="col-md-6">
        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>Enter your name</Form.Label>
            <Form.Control
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col}>
            <Form.Label>What is your horoscope?</Form.Label>
            <Form.Control
              required
              as="select"
              value={horoscopeSign}
              onChange={(e) => setHoroscopeSign(e.target.value)}
            >
              <option value="aries">Aries — Mar 21 - Apr 19</option>
              <option value="taurus">Taurus — Apr 20 - May 20 </option>
              <option value="gemini">Gemini — May 21 - Jun 20</option>
              <option value="cancer">Cancer — Jun 21 - Jul 22</option>
              <option value="leo">Leo — Jul 23 - Aug 22</option>
              <option value="virgo">Virgo — Aug 23 - Sep 22</option>
              <option value="libra">Libra — Sep 23 - Oct 22</option>
              <option value="scorpio">Scorpio — Oct 23 - Nov 21</option>
              <option value="sagittarius">Sagittarius — Nov 22 - Dec 21</option>
              <option value="capricorn">Capricorn — Dec 22 - Jan 19</option>
              <option value="aquarius">Aquarius — Jan 20 - Feb 18</option>
              <option value="pisces">Pisces — Feb 19 - Mar 20</option>
            </Form.Control>
          </Form.Group>
        </Row>

        <Button variant="primary" type="submit">
          submit
        </Button>
      </Form>
    </Container>
  );
}
export default App;
