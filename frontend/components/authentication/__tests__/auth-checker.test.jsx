import { MockedProvider } from '@apollo/react-testing';
import { GraphQLError } from 'graphql';
import { CURRENT_USER_QUERY } from '../../../queries/current-user-query';
import { act, render } from '../../../util/test-utils/with-providers';
import AuthChecker from '../auth-checker';

const wait = require('waait');

const me = {
  id: 'abcdefghijkl',
  email: 'test@email.com',
  name: 'Testy McTestface',
  permissions: null,
};

const mocks = [
  {
    request: {
      query: CURRENT_USER_QUERY,
    },
    result: {
      data: {
        me: me,
      },
    },
  },
];

describe('<AuthChecker />', () => {
  test('it shows it is loading', async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AuthChecker>Hello</AuthChecker>
      </MockedProvider>
    );
    expect(getByText('Loading...')).toBeInTheDocument();
  });

  test("it should tell the user they don't have permissions", async () => {
    const { getByText } = render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <AuthChecker>Hello</AuthChecker>
      </MockedProvider>
    );

    await act(() => wait(0));

    expect(
      getByText('You do not have the privileges to access this page')
    ).toBeInTheDocument();
  });

  test('it should show the user the content if they have the required permissions', async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].result.data.me.permissions = ['ADMIN'];
    const { getByText } = render(
      <MockedProvider mocks={newMocks} addTypename={false}>
        <AuthChecker>Hello</AuthChecker>
      </MockedProvider>
    );

    await act(() => wait(0));

    expect(getByText('Hello')).toBeInTheDocument();
  });

  test('it should tell the user they need to login', async () => {
    const newMocks = Array.from(mocks, mock => ({
      ...mock,
      result: { data: { me: null } },
    }));
    const { getByText } = render(
      <MockedProvider mocks={newMocks} addTypename={false}>
        <AuthChecker>Hello</AuthChecker>
      </MockedProvider>
    );

    await act(() => wait(0));

    expect(getByText('You need to log in mate.')).toBeInTheDocument();
  });

  test('it should return error if something goes wrong with the request', async () => {
    const newMocks = Array.from(mocks);
    newMocks[0].error = [new GraphQLError('Error!')];
    const { getByText } = render(
      <MockedProvider mocks={newMocks} addTypename={false}>
        <AuthChecker>Hello</AuthChecker>
      </MockedProvider>
    );
    await act(() => wait(0));
    expect(getByText(`Error!!`)).toBeInTheDocument();
  });
});
