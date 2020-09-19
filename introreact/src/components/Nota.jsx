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
            <>
               { this.props.contenido  ?  
                this.props.contenido.map((nota, i) => (
                <div className="nota" key={i}>
                    {nota}
                    <button onClick={() => this.props.removeNota(i)}>eliminar</button>
                </div>
                
                ))
            :
                <div>No hay notas</div>
            }
            </>
        )}
    
}

export default Nota;