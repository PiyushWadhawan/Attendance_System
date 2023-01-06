import React from 'react'
import PropTypes from 'prop-types'

function Button({ color, text, executeTask }) {

  return (
    <button onClick={executeTask} style={{ backgroundColor: color }}className='btn'>
        {text}
    </button>
  )
}

Button.defaultProps = {
    color: 'red'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    executeTask: PropTypes.func,
}


export default Button
