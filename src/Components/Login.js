import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button} from "react-bootstrap";
import FormContainer from "../Components/FormContainer";




const Login = () => {
  return(

  <FormContainer>
      <h1>SIGN IN</h1>
      <Form>
        <Form.Group controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
          ></Form.Control>
        </Form.Group>

        <Button type="submit" className="btn btn-dark" style={{ color:"white"}}>
          SIGN IN
        </Button>
      </Form>

    </FormContainer>
  );
};

export default Login
