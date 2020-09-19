import React from 'react'
import ReactDOM from 'react-dom'
import Nota from './Nota'
import { IoIosAdd } from 'react-icons/io'
import { FaBeer } from 'react-icons/fa';
class FormNota extends React.Component {

    constructor(props) {
        super()
        this.state = { nuevatarea: '', notas: [] }
      }
      

  componentDidMount(){

    if(localStorage.getItem('notas').length > 0){
      this.setState({notas: JSON.parse(localStorage.getItem('notas'))})
    }
    
  }
  onChange = e => this.setState({ [e.target.name]: e.target.value })

  addNota = (nuevaNota) => {
    this.setState({
      notas: [...this.state.notas, nuevaNota]
    })

    localStorage.setItem('notas', JSON.stringify([...this.state.notas, nuevaNota]))
  }

  removerNotas = () =>{
    this.setState({notas: []})
    localStorage.setItem('notas', [])
  }

  removeItemOnce(arr, index) {
    if (index > -1) {
      arr.splice(index, 1);
    }
    return arr;
  }

  removerNota = (index) =>{
    let newNotas = this.removeItemOnce(this.state.notas, index)
    console.log("New notas", newNotas)
    this.setState({
      notas: newNotas
    })
    localStorage.setItem('notas', JSON.stringify(newNotas))
  }

  render () {
    return (
    <>
    <div>
      <input type="text" style={{ width: '70%' , marginTop: '10px', marginBottom:'10px'}} name="nuevatarea" value={this.state.nuevatarea} onChange={this.onChange}/>
      <button onClick={() => this.addNota(this.state.nuevatarea)} style={{width:'20%'}}> <FaBeer /> </button>
      <button onClick={this.removerNotas}>Eliminar todas las notas</button>

    </div>
      <Nota contenido={this.state.notas} removeNota={this.removerNota}/>
    </>
    )

  }
}

export default FormNota;