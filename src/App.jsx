import SignUp from './components/SignUp';
import { AuthProvider } from './contexts/AuthContext';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PrivateRoutes from './Routes/PrivateRoutes';
import ContainerRoutes from './Routes/ContainerRoutes';
import Login from './components/Login';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Dashboard />} />
          </Route>
          <Route element={<ContainerRoutes />}>
            <Route path="sign-up" element={<SignUp />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
