import React from "react";
import { Form, Button } from "react-bootstrap";
import { GitHubLogin } from "react-github-login";

const Signup = () => {
  // const onSuccess = (response) => console.log(response);
  // const onFailure = (response) => console.error(response);
  return (
    <div className='container'>
      <div className='row'>
        <h3 className='text-center mt-3'>Sign up</h3>
        <Form className='form-width col-sm-12 col-md-6 col-lg-5'>
          <Form.Group className='mb-3' controlId='formBasicFirstName'>
            <Form.Label>First Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your first name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicLastName'>
            <Form.Label>Last Name</Form.Label>
            <Form.Control type='text' placeholder='Enter your last name' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control type='password' placeholder='Password' autoComplete="on"/>
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Check type='checkbox' label='Check me out' />
          </Form.Group>
          <Button variant='primary' type='submit'>
            Sign up
          </Button>
        </Form>
      </div>
      
    </div>
  );
};

export default Signup;
