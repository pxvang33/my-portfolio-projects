import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class AdminDelete extends Component {
    deleteProject = () => {
        const action = { type: 'DELETE_PROJECTS', payload: { projectId: this.props.project.id } }
        this.props.dispatch(action);
    }

    render() {

        return (
            <TableRow>
                <TableCell>{this.props.project.name}</TableCell>
                <TableCell align="right"><button onClick={this.deleteProject}>Delete</button></TableCell>
            </TableRow>
        );
    }
}


export default connect()(AdminDelete);
