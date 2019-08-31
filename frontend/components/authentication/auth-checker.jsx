import { useQuery } from '@apollo/react-hooks';
import { CURRENT_USER_QUERY } from '../../queries/current-user-query';

const AuthChecker = ({ requiredPermissions, children }) => {
  const { data } = useQuery(CURRENT_USER_QUERY, { ssr: true });
  const { me } = data;
  if (!me) {
    return <p>You need to log in mate.</p>;
  } else if (me.permissions) {
    return children;
  }
  return <p>You do not have the privileges to access this page</p>;
};

export default AuthChecker;
