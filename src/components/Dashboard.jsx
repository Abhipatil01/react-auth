import React from 'react';
import { Navbar, Container, NavDropdown } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

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
    <Navbar sticky="top" variant="light" bg="light">
      <Container>
        <Navbar.Brand>Dashbord</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <NavDropdown title={<span>{currentUser.email}</span>}>
            <NavDropdown.Item>Update Profile</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item onClick={onLogout}>Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Dashboard;
