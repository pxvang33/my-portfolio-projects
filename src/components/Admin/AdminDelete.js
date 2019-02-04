import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

class AdminDelete extends Component {


    render() {

        return (
            <TableRow>
                <TableCell>{this.props.project.name}</TableCell>
                <TableCell align="right"><button>Delete</button></TableCell>
            </TableRow>
            // <tr >
            //     <td>{this.props.project.name}</td>
            //     <td><button>Delete</button></td>
            // </tr>
        );
    }
}


export default connect()(AdminDelete);
