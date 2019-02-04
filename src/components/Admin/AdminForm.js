import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class AdminForm extends Component {
    // componentDidMount() {
    //     this.getProjects();
    // }
    // getProjects = () => {
    //     let action = { type: 'GET_PROJECTS' }
    //     this.props.dispatch(action)
    // }

    render() {
        return (
            <div>
                <form onSubmit={this.addCustomer}>
                    <TextField
                        required
                        id="outlined-name"
                        label="Name"
                        onChange={this.nameChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        required
                        id="outlined-address"
                        label="Address"
                        onChange={this.addressChange}
                        margin="normal"
                        variant="outlined"
                    /><TextField
                        required
                        id="outlined-city"
                        label="City"
                        onChange={this.cityChange}
                        margin="normal"
                        variant="outlined"
                    /><TextField
                        required
                        id="outlined-zip"
                        label="Zip Code"
                        onChange={this.zipChange}
                        margin="normal"
                        variant="outlined"
                    />
                    <br />
                    <TextField
                        id="outlined-multiline-static"
                        label="Additional Comments"
                        multiline
                        rows="4"
                        margin="normal"
                        variant="outlined"
                        onChange={this.commentsChange}
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
