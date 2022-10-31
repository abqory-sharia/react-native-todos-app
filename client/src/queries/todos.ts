import {gql} from '@apollo/client';

export const GET_TODOS = gql`
  query {
    todos {
      data {
        id
        attributes {
          job
          done
          description
          createdAt
          updatedAt
        }
        __typename
      }
      meta {
        pagination {
          page
          total
          pageSize
        }
        __typename
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
  mutation toggleDone($id: ID!, $status: Boolean!) {
    updateTodo(id: $id, data: {done: $status}) {
      data {
        id
        attributes {
          job
          done
        }
      }
    }
  }
`;
