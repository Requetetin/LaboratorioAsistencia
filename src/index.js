/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import Student from './Components/Student/Student'
import './index.css'

const App = () => (
  <div className="app_container">
    <h1>Toma de asistencia</h1>
    <Student name="Brandon" />
    <Student name="Diego" />
    <Student name="Diego59x" />
    <Student name="jurhs" />
    <Student name="LagBender" />
    <Student name="Laurelinda" />
    <Student name="martspain" />
    <Student name="Noelle" />
    <Student name="Octavius Rex" />
    <Student name="Requetetin" />
    <Student name="Ale Gudiel" />
    <Student name="amaya" />
    <Student name="bass" />
    <Student name="bryann_alfaro" />
    <Student name="Cesar" />
    <Student name="Diego Arredondo" />
    <Student name="GabrielQ" />
    <Student name="Jirafa" />
  </div>
)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
