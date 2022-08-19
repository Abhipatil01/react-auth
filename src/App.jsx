import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Container
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: '100vh' }}
      >
        <div className="w-100" style={{ maxWidth: '400px' }}>
          <SignUp />
        </div>
      </Container>
    </AuthProvider>
  );
}

export default App;
