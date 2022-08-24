import React from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';

function Login() {
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const { login } = useAuth();
  const [error, setError] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await login(emailRef.current.value, passwordRef.current.value);
      navigate('/', { replace: true });
    } catch (error) {
      setError('Unable to Login!');
    }
    setLoading(false);
  };

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Login</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={onSubmit}>
            <Form.Group id="email" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" required ref={emailRef} />
            </Form.Group>
            <Form.Group id="password" className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" required ref={passwordRef} />
            </Form.Group>
            <Button type="submit" className="w-100 mb-2" disabled={loading}>
              Login
              {loading && (
                <Spinner animation="border" size="sm" className="pl-2" />
              )}
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Don't have an account? <Link to="/sign-up">Sign Up</Link>
      </div>
    </>
  );
}

export default Login;
