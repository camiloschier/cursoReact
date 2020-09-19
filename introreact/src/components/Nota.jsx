import React from 'react';
import ReactDOM from 'react-dom';
import './Nota.css'
class Nota extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    render() {
        return(
            this.props.contenido.map(nota => (
                <div className="nota">
                    {nota}
                </div>
            ))
        )
    }
}

export default Nota;