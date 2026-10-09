import React, { Component } from "react";
import axios from 'axios'
import Global from './Global'

export default class DoctoresEspecialidad extends Component {

  cajaEspecialidad= React.createRef();
  urldoc= Global.urlapiDoctor

  state = {
    especialidad: [],
    doctor: []
  }

  cargarEspecialidades= () => {
    let request = "/api/Doctores/Especialidades";

    axios.get(this.urldoc+ request).then((response) => {

      this.setState({
        especialidad: response.data
      });
    }).catch((error)=>{
      console.log("Error:", error)

    });

  }

  buscarEspecialidad= (event) => {
    event.preventDefault();

    let especialidad = this.cajaEspecialidad.current.value;
    let request = "/api/Doctores/DoctoresEspecialidad/" + encodeURIComponent(especialidad);

    axios.get(this.urldoc + request).then((response) => {
      this.setState({
        doctor: response.data
      });
    });
  }

  componentDidMount = () => {
    this.cargarEspecialidades();
  }

  render() {
    return (
      <div>
        <h1 >Doctores por Especialidad</h1>

        <form onSubmit={this.buscarEspecialidad}>
          <select ref={this.cajaEspecialidad}>
            {
              this.state.especialidad.map((especialidad, index) => {
                return (
                  <option key={index} value={especialidad}>
                    {especialidad}
                  </option>
                )
              })
            }
          </select>

          <button>Buscar Doctores</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Apellido</th>
               <th>especialidad</th>
            </tr>
          </thead>

          <tbody>
            {
              this.state.doctor.map((doctor, index) => {
                return (
                  <tr key={index}>
                    <td>{doctor.apellido}</td>
                    <td>{doctor.especialidad}</td>

                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </div>
    )
  }
}
