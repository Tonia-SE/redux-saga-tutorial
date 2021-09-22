import React from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { ListGroup } from 'reactstrap';

const UsersList = ({ users, onDeleteUser }) => {

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
