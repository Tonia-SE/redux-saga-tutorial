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
