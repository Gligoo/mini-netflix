import React, { Component } from 'react'


import { Spinner } from './index'
import '../css/LoadButton.css';


class LoadButton extends Component {
    render() {
        return(
            // on ne peu pas retourner directement du conditionnel dc on utilise une balise fragment
            <>
            {this.props.loading ? 
            (
                <Spinner />
            ) :
            (
                <div 
                onClick={this.props.onButtonClick}
                className="loadButton"
                >
                    <h3 className="loadButton--text">Voir plus</h3>
                </div>
            )
        }
            </>
        )
    }
}

export { LoadButton }