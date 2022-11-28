import {gql} from '@apollo/client';

export const GET_TODOS_PER_USER = gql`
  query getTodos($userId: ID!) {
    todos(
      filters: {done: {eq: false}, users_permissions_user: {id: {eq: $userId}}}
    ) {
      data {
        id
        attributes {
          job
          description
          done
        }
      }
    }
  }
`;

export const GET_TODOS_ARCHIEVED = gql`
  query getArchieved($userId: ID!) {
    todos(
      filters: {done: {eq: true}, users_permissions_user: {id: {eq: $userId}}}
    ) {
      data {
        id
        attributes {
          job
          done
          description
        }
      }
    }
  }
`;

export const ADD_TODOS = gql`
  mutation addTodo($data: TodoInput!) {
    createTodo(data: $data) {
      data {
        id
        attributes {
          job
          done
          description
          users_permissions_user {
            data {
              id
              attributes {
                username
                email
              }
            }
          }
        }
      }
    }
  }
`;

export const REMOVE_TODO = gql`
  mutation removeTodo($id: ID!) {
    deleteTodo(id: $id) {
      data {
        id
        attributes {
          job
          done
          description
        }
      }
    }
  }
`;

export const TOGGLE_DONE = gql`
  mutation toggleDone($id: ID!, $data: TodoInput!) {
    updateTodo(id: $id, data: $data) {
      data {
        id
        attributes {
          job
          done
          description
        }
      }
    }
  }
`;
