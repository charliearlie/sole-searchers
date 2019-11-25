import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY } from '../../queries/current-user-query';

const AuthChecker = ({ requiredPermissions, children }) => {
  const { data, error, loading } = useQuery(CURRENT_USER_QUERY, { ssr: true });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!!</p>;
  const { me } = data;
  if (!me) {
    return <p>You need to log in mate.</p>;
  } else if (me.permissions) {
    return children;
  }
  return <p>You do not have the privileges to access this page</p>;
};

export default AuthChecker;
