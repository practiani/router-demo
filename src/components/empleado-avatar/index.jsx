import React from 'react'

class EmpleadoAvatar extends React.Component {
  render() {

    let picture = this.props.picture;

    return (
      <figure className="media-left">
        {`${this.props.picture}`}
      </figure>
    )
  }
}

export default EmpleadoAvatar
