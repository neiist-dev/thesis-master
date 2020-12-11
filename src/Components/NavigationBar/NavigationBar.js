import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from './logo.png';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from "react-router-dom";
import './NavigationBar.css';


function NavigationBar() {
  return (
    <Row>
      <Col>
        <Navbar className="our-nav" bg="ligth" expand="lg">
          <Navbar.Brand as={Link} exact to="/">
            <img src={logo} width="40" height="40" className="d-inline-block align-top" alt="GCE logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/gce-thesis">GCE THESIS</Nav.Link>
            </Nav>
            <Form inline>
              <InputGroup id="search-bar" className="mb-3">
                <FormControl
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <InputGroup.Append>
                  <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
                </InputGroup.Append>
              </InputGroup>
            </Form>
            <LoginControl></LoginControl>
          </Navbar.Collapse>
        </Navbar>
      </Col>
    </Row>
  );
}



function LoginButton(props) {
  return (
    <div className="our-nav" onClick={props.onClick}>
      <Nav.Link href="#4">LOGIN</Nav.Link>
    </div>
  );
}

function LogoutButton(props) {
  return (
    <div className="our-nav" onClick={props.onClick}>
      <Nav.Link href="#4">LOGOUT</Nav.Link>
    </div>
  );
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  const studentName = props.studentName;
  if (isLoggedIn) {
    return (
      <Nav.Link href="#3">{studentName}</Nav.Link>
    );
  }
  return null;
}


class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false, studentName: null };
  }

  handleLoginClick() {
    //TODO ir ao fenix mandar grande login
    this.setState({ isLoggedIn: true, studentName: "ProfJam" });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false, studentName: null });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const studentName = this.state.studentName;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <Nav className="ml-auto">
        <Greeting isLoggedIn={isLoggedIn} studentName={studentName} />
        {button}
      </Nav>
    );
  }
}



export default NavigationBar;
