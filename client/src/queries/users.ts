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

export const REGISTRATION = gql`
  mutation registerUser($data: UsersPermissionsRegisterInput!) {
    register(input: $data) {
      jwt
      user {
        id
        username
        email
      }
    }
  }
`;

export const GET_USER_PROFILE = gql`
  query getUserProfile($id: ID!) {
    usersPermissionsUsers(filters: {id: {eq: $id}}) {
      data {
        attributes {
          username
          email
          profileImage {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;
