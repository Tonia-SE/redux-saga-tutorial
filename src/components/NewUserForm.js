// import React, { useCallback, useState } from 'react';
// import { Input } from 'reactstrap';
// import { Label } from 'reactstrap';
// import { FormGroup } from 'reactstrap';
// import { Form } from 'reactstrap';
// import { Button } from 'reactstrap';

// const NewUserForm  = React.memo(({ onSubmit }) => {

//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');

//   const resetState = () => {
//     setFirstName('');
//     setLastName('');
//   };

//   const handleOnSubmit = (event) => { 
//     // event.preventDfault();
//     onSubmit({
//       firstName,
//       lastName
//     });
//     resetState();
//   };

//   const handleSetFirstName = (event) => {
//     setFirstName(event.currentTarget.value)
//   };

//   const handleSetLastName = (event) => {
//     setLastName(event.currentTarget.value)
//   };

//   // const handleSetFirstName = (event) => {
//   //   setFirstName(event.target.value);
//   // };

//   // const handleSetLastName = (event) => {
//   //   setLastName(event.target.value);
//   // };

//   return (
//     <Form 
//       onSubmit={handleOnSubmit}
//     >
//       <FormGroup style={{ marginBottom: '20px' }}>
//         <Label style={{ marginBottom: '10px' }}>
//           First name
//         </Label>
//         <Input 
//           required 
//           type="text" 
//           value={firstName} 
//           onChange={handleSetFirstName}
//           placeholder='first name' 
//         />
//       </FormGroup>
//       <FormGroup style={{ marginBottom: '20px' }}>
//         <Label style={{ marginBottom: '10px' }}>
//           Last name
//         </Label>
//         <Input 
//           required 
//           type="text" 
//           value={lastName} 
//           onChange={handleSetLastName}
//           placeholder='last name' 
//         />
//       </FormGroup>
//       <FormGroup style={{ marginBottom: '20px' }}>
//         <Button 
//           outline 
//           type='submit' 
//           color='primary'
//           style={{ width: '100%' }}
//         >
//           Create
//         </Button>
//       </FormGroup>
//     </Form>
//   )
// });

// export default NewUserForm;

import React, {Component} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

class NewUserForm extends Component {

    state = {
        firstName: '',
        lastName: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        const { firstName, lastName } = this.state;

        this.props.onSubmit({
            firstName,
            lastName
        });

        this.setState({
            firstName: '',
            lastName: ''
        });
    };

    handleFirstNameChange = e => {
        this.setState({
            firstName: e.currentTarget.value
        });
    };

    handleLastNameChange = e => {
        this.setState({
            lastName: e.currentTarget.value
        });
    };

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup style={{ marginBottom: '20px' }}>
                    <Label>
                        First name
                    </Label>
                    <Input required type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                </FormGroup>
                <FormGroup style={{ marginBottom: '20px' }}>
                    <Label>
                        Last name
                    </Label>
                    <Input required type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                </FormGroup>
                <FormGroup style={{ marginBottom: '20px' }}>
                    <Button outline type="submit" color="primary" style={{ width: '100%' }}>
                        Create
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default NewUserForm;
