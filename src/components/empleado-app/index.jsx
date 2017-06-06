import React from 'react'
import EmpleadoList from '../empleado-list'

class EmpleadoApp extends React.Component {

  constructor(props) {
    super(props)
    this.state = { empleados: [] }
  }

  componentWillMount() {
    fetch('http://localhost:8004/api/ubigeo/ubigeos/')
      .then((response) => {
        console.log("Aqui")
        return response.json()
      })
      .then((empleados) => {
        //console.log("results::"+ JSON.stringify(empleados.results) )
        this.setState({ empleados: empleados.results })
      })
  }

  render() {
    if (this.state.empleados.length > 0) {
      return (
        <div className="container-fluid">

          <EmpleadoList listado={this.state.empleados} />
        </div>
      )
    } else {
      return <p className="text-center">Cargando empleados...

      </p>
    }
  }

}

export default EmpleadoApp
