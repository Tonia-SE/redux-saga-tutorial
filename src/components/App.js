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

// import React, {Component} from 'react';
// import NewUserForm from './NewUserForm';
// import UserList from './UsersList';
// import {connect} from 'react-redux';
// import {getUsersRequest, createUserRequest,
//    // deleteUserRequest, usersError
//   } from '../actions/users';
// import {Alert} from 'reactstrap';

// class App extends Component {
//     constructor(props){
//         super(props);
//         this.props.getUsersRequest();
//     }

//     handleCreateUserSubmit = ({firstName, lastName}) => {
//         this.props.createUserRequest({
//             firstName,
//             lastName
//         });
//     };

//     // handleDeleteUserClick = (userId) => {
//     //     this.props.deleteUserRequest(userId);
//     // };

//     handleCloseAlert = () => {
//         this.props.usersError({
//             error: ''
//         });
//     };

//     render(){
//         const users = this.props.users;
//         return (
//             <div style={{margin: '0 auto', padding: '20px', maxWidth: '600px'}}>
//                 <h2>
//                     Users
//                 </h2>
//                 {/* <Alert color="danger" isOpen={!!this.props.users.error} toggle={this.handleCloseAlert}>
//                     {this.props.users.error}
//                 </Alert> */}
//                 <NewUserForm onSubmit={this.handleCreateUserSubmit} />
//                 {/* {!!users.items && !!users.items.length && */}
//                 <UserList 
//                 // onDeleteUserClick={this.handleDeleteUserClick} 
//                 users={users.items}/>
//                 {/* } */}
//             </div>
//         );
//     }
// }

// export default connect(({users}) => ({users}), {
//     getUsersRequest,
//     createUserRequest,
//     // deleteUserRequest,
//     // usersError
// })(App);