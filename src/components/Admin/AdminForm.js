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
        console.log(this.state);
        
    }
    dateChange = (event) => {
        this.setState({
            ...this.state,
            date: event.target.value,
        });
        console.log(this.state);

    }
    githubChange = (event) => {
        this.setState({
            ...this.state,
            github: event.target.value,
        });
        console.log(this.state);

    }
    websiteChange = (event) => {
        this.setState({
            ...this.state,
            website: event.target.value,
        });
        console.log(this.state);

    }
    tagChange = (event) => {
        this.setState({
            ...this.state,
            tag: parseInt(event.target.value),
        });
        console.log(this.state);

    }
    descriptionChange = (event) => {
        this.setState({
            ...this.state,
            description: event.target.value,
        });
        console.log(this.state);

    }
    addProject = (event) => {
        event.preventDefault();
        const projectInfo = this.state
        const action = { type: 'ADD_PROJECTS', payload: projectInfo };
        this.props.dispatch(action);
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
                        <option value={" "} />
                        <option value={1}>React </option>
                        <option value={2}>jQuery</option>
                        <option value={3}>Node</option>
                        <option value={4}>SQL</option>
                        <option value={5}>Redux </option>
                        <option value={6}>HTML </option>
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
