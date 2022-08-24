import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './components/PrivateRoutes';
import Login from './components/Login';

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <AuthProvider>
          <Router>
            <Routes>
              <Route element={<PrivateRoutes />}>
                <Route path="/" element={<Dashboard />} />
              </Route>
              <Route path="sign-up" element={<SignUp />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </Container>
  );
}

export default App;
