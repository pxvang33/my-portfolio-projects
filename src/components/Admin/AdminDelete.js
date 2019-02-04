import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
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
            // <tr >
            //     <td>{this.props.project.name}</td>
            //     <td><button>Delete</button></td>
            // </tr>
        );
    }
}


export default connect()(AdminDelete);
