import { gql } from '@apollo/client';

export const getAllUsers = gql`
  {
    getAllUser {
      email
      id
      userName
    }
  }
`;