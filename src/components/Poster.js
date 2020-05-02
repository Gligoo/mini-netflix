import React, { Component } from 'react';
import Fontawesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { addMovie, removeMovie } from '../actions/movie';

import '../css/Poster.css';

class PosterComponent extends Component {
    state = {
        hover: false
    }

    showOverlay = () => {
        if(this.state.hover) {
            return;
        }
        this.setState({ hover: true });
    }

    hideOverlay = () => {
        this.setState({ hover: false })
    }

    remove = () => {
        this.props.removeM(this.props.id)
        console.log('remove')
    }

    add = () => {
        this.props.addM(this.props.movie)
        console.log('add')
    }

    render() {
        return(
            <div 
                className="poster"
                onMouseEnter={this.showOverlay}
                onMouseLeave={this.hideOverlay}
                >
                <Link to={{pathname: `/${this.props.id}`}}>
                    <img className="poster--img" src={this.props.imgSrc} alt="poster"/>
                </Link>
                {this.state.hover ? 
                (
                    <div className="poster--overlay">
                        <h3 className="poster--overlay__text">Liste de souhaits</h3>
                        {this.props.whished ?
                        (
                            <Fontawesome onClick={this.remove} className="poster--icon" name ="heart" size="3x" />
                        ) :
                        (
                            <Fontawesome onClick={this.add} className="poster--icon__not" name ="heart-o" size="3x" />
                        )
                        }
                    </div>
                ) : null
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addM : movie => dispatch(addMovie(movie)),
        removeM : movieId => dispatch(removeMovie(movieId)),

    }
}

const Poster = connect(null, mapDispatchToProps)(PosterComponent)

export { Poster };