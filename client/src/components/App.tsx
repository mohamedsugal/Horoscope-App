import React, { useState } from "react";
import { Container, Form, Button, Col, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import "./styles.css";

function App() {
  const [name, setName] = useState("");
  const [horoscopeSign, setHoroscopeSign] = useState("aries");
  const [backendData, setBackendData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postedData, setPostedData] = useState(false);
  const delay = (ms: any) => new Promise((res) => setTimeout(res, ms));

  const submitHandler = (e: React.ChangeEvent<any>) => {
    setPostedData(true);
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
      .then((response) => {
        if (response.status === 200) {
          console.log("successfully posted to the server!!");
        } else {
          console.log("it wasn't successful");
        }
      })
      .catch((err) => {
        console.log(err.response.request._response);
      });
    console.log(JSON.stringify(request));
    setName("");
    setHoroscopeSign("aries");

    getHoroscopeDetails().then((r) => {
      setLoading(true);
      setBackendData(r);
      console.log(r);
    });
    setLoading(false);
  };

  const showSpinner = () => {
    if (postedData) {
      return (
        <div>
          <Spinner animation="border" variant="primary" />
        </div>
      );
    }
  };

  async function getHoroscopeDetails() {
    await delay(2000);
    console.log("Waited 2s");
    const response = await axios.get("/horoscope-details");
    return response.data;
  }

  return (
    <Container>
      <h2 style={{ marginTop: "1em" }}>
        <span>Daily </span>Horoscope
      </h2>

      <Form onSubmit={submitHandler} className="col-md-5">
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

        <Button
          variant="primary"
          type="submit"
          style={{ textTransform: "uppercase", fontWeight: "500" }}
        >
          submit
        </Button>
      </Form>
      <div>{loading ? JSON.stringify(backendData) : showSpinner()}</div>
    </Container>
  );
}
export default App;
