import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ProjectCard extends Component {
    componentDidMount() {
        // use component did mount to dispatch an action to request the plantList from the API
    }

    render() {

        return (
            <div >
                <Card className="adjustCard">
                        <CardMedia
                        component='img'
                        height='200'
                        width='200'
                        img src={this.props.project.thumbnail} alt="" 
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {this.props.project.name}
          </Typography>
                            <Typography component="p">
                                {this.props.project.description}
          </Typography>
                        </CardContent>
                    <CardActions>
                        <Button size="small" color="primary">
                            <a target="blank" href={this.props.project.website}> Website </a>
        </Button>
                        <Button size="small" color="primary">
                            <a target="blank" href={this.props.project.github}>Github</a>
        </Button>
                    </CardActions>
                </Card>
                {/* <span>{this.props.project.name}</span> */}
                {/* <td>{this.props.plant.location}</td>
                <td>{this.props.plant.quantity}</td> */}
            </div>
        );
    }
}


export default connect()(ProjectCard);
