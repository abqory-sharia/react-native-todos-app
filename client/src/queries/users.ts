import {gql} from '@apollo/client';

export const LOGIN = gql`
  mutation userLogin($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;
