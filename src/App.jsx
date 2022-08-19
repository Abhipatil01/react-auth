import SignUp from './components/SignUp';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: '100vh' }}
    >
      <div className="w-100" style={{ maxWidth: '400px' }}>
        <SignUp />
      </div>
    </Container>
  );
}

export default App;
