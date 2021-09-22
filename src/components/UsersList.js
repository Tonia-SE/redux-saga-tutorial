import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, ListGroupItem } from 'reactstrap';
import { ListGroup } from 'reactstrap';
import { deleteUserRequest } from '../actions/users';

const UsersList = ({ users, onDeleteUser }) => {

  // const dispatch = useDispatch();

  // const handleDeleteUser = (id) => {
  //   dispatch(deleteUserRequest(id))
  // }

  return (
    <ListGroup>
      {users.map((user) => {
        return (
          <ListGroupItem key={user.id}>
            <section style={{ display: 'flex' }}>
              <div style={{ flexGrow: 1, marin: 'auto 0' }}>
                {user.firstName} {user.lastName}
              </div>
              <div>
                <Button 
                  outline color='danger' 
                  onClick={() => onDeleteUser(user.id)}
                  // onClick={() => handleDeleteUser(user.id)}
                >
                  Delete
                </Button>
              </div>
            </section>
          </ListGroupItem>
        )
      })}
    </ListGroup>
  )
};

export default UsersList;
