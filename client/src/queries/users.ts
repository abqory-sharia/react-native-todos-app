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
  mutation registration($data: UsersPermissionsUserInput!) {
    createUsersPermissionsUser(data: $data) {
      data {
        attributes {
          email
          username
          confirmed
        }
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
