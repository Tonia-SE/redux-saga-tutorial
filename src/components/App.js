import { Alert } from 'reactstrap';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersRequest, createUserRequest, deleteUserRequest, usersError } from '../actions/users';
import NewUserForm from './NewUserForm';
import UsersList from './UsersList';

function App() {

  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  console.log(users);

  useEffect(() => {
    dispatch(getUsersRequest());
  }, [dispatch]);

  const handleSubmit = ({ firstName, lastName }) => {
    dispatch(createUserRequest({ firstName, lastName }));
  };

  const handleDeleteUser = (id) => {
    dispatch(deleteUserRequest(id));
  };

  const handleCloseAlert = () => {
    dispatch(usersError({ error: '' }))
  };

  return (
    <div style={{margin: 'auto', padding: '20px', maxWidth: '600px'}}>
      <h3>Users list</h3>
      <Alert color="primary" isOpen={!!users.error} toggle={handleCloseAlert}>
        {users.error}
      </Alert>
      <NewUserForm onSubmit={handleSubmit}/>
      <UsersList users={users.items} onDeleteUser={handleDeleteUser}/>
    </div>
  );
}

export default App;
