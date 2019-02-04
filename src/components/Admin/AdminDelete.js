import React, { Component } from 'react';
import { connect } from 'react-redux';



class AdminDelete extends Component {


    render() {

        return (
            <tr >
                <td>{this.props.project.name}</td>
                <td><button>Delete</button></td>
            </tr>
        );
    }
}


export default connect()(AdminDelete);
