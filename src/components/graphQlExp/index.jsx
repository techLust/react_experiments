import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { getAllUsers } from '../../graphQL/Query';
import { CREATE_USER, DELETE_USER } from '../../graphQL/Mutation';

const GraphQlExp = () => {
  const { loading, error, data } = useQuery(getAllUsers);
  const [createUser, { err }] = useMutation(CREATE_USER);
  const [deleteUser, { errorr }] = useMutation(DELETE_USER);

  if (loading) return 'Loading...';
  console.log(data);

  const addUser = () => {
    createUser({
      variables: {
        userName: 'Random2',
        email: 'random2@gmail.com',
        password: '12345',
      },
    });
    console.log('User added');
  };

  const delUser = userId => {
    deleteUser({
      variables: {
        id: userId,
      },
    });
    console.log('User deleted');
  };

  return (
    <div>
      <h1>GraphQl Exp</h1>
      {data.getAllUser?.map(el => (
        <div>
          <div>
            {el?.userName} ------ {el?.email} -----{' '}
            <button onClick={() => delUser(el.id)}>Delete</button>
          </div>
        </div>
      ))}
      <br />
      <button onClick={() => addUser()}>Add User</button>
      <br />
    </div>
  );
};

export default GraphQlExp;
