import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const ContainerRoutes = () => {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <Outlet />
      </div>
    </Container>
  );
};

export default ContainerRoutes;
