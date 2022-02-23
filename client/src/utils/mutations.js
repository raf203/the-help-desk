import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
mutation addUser($unit: String!,$email: String!, $password: String!,$isAdmin: Boolean) {
    addUser(unit: $unit, email: $email, password: $password, isAdmin: $isAdmin) {
      token
      user {
        unit
        _id
      }
    }
  }
`;

export const UPDATE_TICKET = gql`
mutation updateTicket($message: String!, $unit: String!, $id: String!, $isPrivate: Boolean) {
    updateTicket(unit: $unit, message:$message, _id:$id, isPrivate:$isPrivate) {
      _id
      message
      createdAt
      unit
      status
      isPrivate
      
    }
  }
`;

export const ADD_COMMENT = gql`
mutation addComment($ticketId: String!, $message: String!) {
    addComment(ticketId: $ticketId, message:$message) {
      _id
      message
      createdAt
      unit
      status
      title
      isPrivate
    }
  }
`;

export const DELETE_TICKET= gql`
mutation deleteTicket($_id: String!){
    deleteTicket(_id: $_id) {
      _id
      unit
      message
      createdAt
    }
  }
`;

export const ADD_TICKET = gql`
mutation addTicket($message: String!, $unit: String!, $title : String!,, $isPrivate: Boolean) {
  addTicket(unit: $unit, message:$message, title:$title, isPrivate:$isPrivate) {
    _id
    message
    createdAt
    unit
    status
    title
    isPrivate
  }
}
`;

export const UPDATE_COMMENT = gql `

`;