import React from 'react'
import ReactDOM from 'react-dom'
import Nota from './Nota'
class FormNota extends React.Component {

    constructor(props) {
        super(props)
        this.state = { nuevatarea: '', notas: ["Comprar cosas del super","Comprar lavandina","Limpiar baño", "Esconder cuerpo", "Llamar al 911"] }
      }
      

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  addNota = (nuevaNota) => {
    this.setState({
      notas: [...this.state.notas, nuevaNota]
    })
  }
  render () {
    return (
    <>
    <div >
      <input type="text" name="nuevatarea" value={this.state.nuevatarea} onChange={this.onChange}/>
      <button onClick={() => this.addNota(this.state.nuevatarea)}>Agregar nota</button>
    </div>
      <Nota contenido={this.state.notas} />
    </>
    )

  }
}

export default FormNota;