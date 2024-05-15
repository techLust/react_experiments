import { gql } from "@apollo/client";

export const CREATE_USER = gql `
    mutation createUser($userName: String, $email: String, $password: String) {
        createUser(user: {userName: $userName, email: $email, password: $password}){
            id
            userName
            email
        }
    }
`;

export const DELETE_USER = gql `
    mutation deleteUser($id: String){
        deleteUser(id: $id)
    }
`