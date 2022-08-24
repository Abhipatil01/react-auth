import React from 'react';
import { Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import Spinner from 'react-bootstrap/Spinner';

function Dashboard() {
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const onLogout = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      await logout();
    } catch (error) {
      setError('Unable to Logout!');
    }
    setLoading(false);
  };

  return (
    <Card>
      <Card.Body>
        <h2 className="text-center mb-4">Dashboard</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="mb-4">
          <h6>Email</h6>
          <span className="pl-2">{currentUser.email}</span>
        </div>
        {/* <Button className="w-100 mb-2">Update Profile</Button> */}
        <Button className="w-100 mb-2" onClick={onLogout} disabled={loading}>
          Logout
          {loading && <Spinner animation="border" className="pl-2" />}
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Dashboard;
