import React from 'react'
import "./ServiceBox.css"
const ServiceBox = (props) => {
  return (
  <div className="daba">
<h1>{props.hud}</h1>
<p>{props.makeUp}</p>
<p>Price: {props.price}</p>
<p>Duration:{props.duration}</p>
  </div>
  )
}

export default ServiceBox