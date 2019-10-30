import { useMutation } from '@apollo/react-hooks';
import Link from 'next/link';
import Router from 'next/router';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../queries/current-user-query';

const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

function Login() {
  const [formState, setFormState] = React.useState({ email: '', password: '' });
  const [signIn, { error, loading }] = useMutation(LOGIN_MUTATION, {
    variables: formState,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  const handleChange = event => {
    const newState = { ...formState, [event.target.name]: event.target.value };
    setFormState(newState);
  };

  return (
    <>
      <h1>Login</h1>
      <FormSection
        onSubmit={async e => {
          e.preventDefault();
          const user = await signIn();
          //   if (user) {
          //     Router.push({
          //       pathname: '/',
          //     });
          //   }
        }}
      >
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <Link href="/resetpassword">
          <a>Forgot your password</a>
        </Link>
        <ButtonWrapper>
          <button type="submit">Log in</button>
        </ButtonWrapper>
      </FormSection>
    </>
  );
}
const FormSection = styled.form`
  display: flex;
  font-size: 1.6rem;
  align-items: center;
  margin: 0 auto;
  flex-direction: column;

  .input-field {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;

    label {
      font-size: 1.6rem;
    }

    input {
      font-size: 2rem;
      line-height: 2.4rem;
      width: 200px;
      padding: 4px;
      margin-bottom: 8px;
      border-radius: 4px;
      border: 1px solid ${({ theme }) => theme.darkGreyishCyan};

      @media screen and (max-width: 360px) {
        width: 100%;
      }
    }
  }

  .registration-button {
    font-size: 1.6rem;
    height: 1.8rem;
  }

  .login-button {
    width: 90%;
  }
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: ${({ theme }) => theme.spacingUnit};
  width: 210px;
  margin-top: 24px;

  button {
    width: 100%;
  }
`;

export default Login;
