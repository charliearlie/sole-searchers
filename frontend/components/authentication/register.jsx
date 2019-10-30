import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../../queries/current-user-query';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $name: String!
    $password: String!
  ) {
    signUp(email: $email, name: $name, password: $password) {
      id
      email
      name
    }
  }
`;

function Register() {
  const initialFormState = {
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  };

  const [formState, setFormState] = React.useState(initialFormState);

  const handleChange = event => {
    const newState = { ...formState, [event.target.name]: event.target.value };
    setFormState(newState);
  };

  const [signUp, { error, loading }] = useMutation(SIGNUP_MUTATION);

  return (
    <>
      <Header>Register</Header>
      <FormSection
        method="post"
        onSubmit={async e => {
          e.preventDefault();
          await signUp({
            variables: formState,
            refetchQueries: [{ query: CURRENT_USER_QUERY }],
          });
          setFormState(initialFormState);
        }}
      >
        <div className="input-field">
          <label htmlFor="name">Username:</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" onChange={handleChange} />
        </div>
        <div className="input-field">
          <label htmlFor="password">Confirm password:</label>
          <input
            type="password"
            name="passwordConfirm"
            onChange={handleChange}
          />
        </div>
        <ButtonWrapper>
          <button onClick={() => {}}>Register</button>
        </ButtonWrapper>
      </FormSection>
    </>
  );
}

const Header = styled.h1`
  text-align: center;
`;

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

export default Register;
