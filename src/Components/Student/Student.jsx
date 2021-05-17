import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Switch from '@material-ui/core/Switch'
import './Student.css'

export default function Student({ name }) {
  const [state, setState] = useState(false)

  const handleChange = (event) => {
    setState(event.target.checked)
  }

  if (state) {
    return (
      <div className="student_container true">
        <div className="in_flex"><h1>{name}</h1></div>
        <div className="in_flex">
          <Switch
            defaultValue="false"
            color="default"
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }

  if (!state) {
    return (
      <div className="student_container false">
        <div className="in_flex"><h1>{name}</h1></div>
        <div className="in_flex">
          <Switch
            defaultValue="false"
            color="default"
            onChange={handleChange}
          />
        </div>
      </div>
    )
  }

  return (
    <div />
  )
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
}
