import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AdminForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
                projectName: '',
                date: '',
                github: '',
                website: '',
                tag: '',
                description: '',
        }
    }
    projectNameChange = (event) => {
        this.setState({
                ...this.state,
            projectName: event.target.value,
        });
    }
    dateChange = (event) => {
        this.setState({
            ...this.state,
            date: event.target.value,
        });
    }
    githubChange = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        });
    }
    websiteChange = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        });
    }
    tagChange = (event) => {
        this.setState({
            ...this.state,
            tag: event.target.value,
        });
    }
    descriptionChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        });
    }
    // addCustomer sends customer information from state and dispatches to reduxStore
    addProject = (event) => {
        event.preventDefault();
        const customerInfo = this.state.customerToAdd
        const action = { type: 'ADD_NEW_CUSTOMER', payload: customerInfo };
        this.props.dispatch(action);
        this.props.history.push('/checkout');
    }
    render() {
        return (
            <div>
                <form onSubmit={this.addProject}>
                    <TextField
                        required
                        id="outlined-name"
                        label="Project name"
                        type="text"
                        onChange={this.projectNameChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        
                        id="outlined-address"
                        label=""
                        type="date"
                        onChange={this.dateChange}
                        margin="normal"
                        variant="outlined"
                    /><TextField
                        
                        id="outlined-city"
                        label="GitHub URL"
                        onChange={this.githubChange}
                        margin="normal"
                        variant="outlined"
                    /><TextField
                        
                        id="outlined-zip"
                        label="Website URL "
                        onChange={this.websiteChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Select"
                        value={this.state.tag}
                        onChange={this.tagChange}
                        helperText="Please select Tag"
                        margin="normal"
                        variant="outlined"
                    >
                        <option value="" />
                        <option value={'React'}>React </option>
                        <option value={'jQuery'}>jQuery</option>
                        <option value={'Node'}>Node</option>
                        <option value={'SQL'}>SQL</option>
                        <option value={'Redux'}>Redux </option>
                        <option value={'HTML'}>HTML </option>
                    </TextField>
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Description"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        onChange={this.descriptionChange}
                        className="textfield" />
                    <br />
                    <br />
                    <Button type="submit" variant="contained" color="primary" >Submit</Button>
                </form>

            </div>
        )
    }
}

const mapReduxStoreToProps = reduxStore => ({
    reduxStore,
})

export default connect(mapReduxStoreToProps)(AdminForm);
