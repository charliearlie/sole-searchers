import Login from '../components/authentication/login';
import AuthChecker from '../components/authentication/auth-checker';
const Admin = props => {
  return (
    <AuthChecker>
      <Login />
    </AuthChecker>
  );
};

export default Admin;
