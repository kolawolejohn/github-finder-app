import React, { Fragment } from "react"
import spinner from "./spinner.gif"

const Spinner = () => {
  return (
    <Fragment>
      <img src={spinner} alt="Loading..." style={loadingStlye} />
    </Fragment>
  )
}

const loadingStlye = {
  width: "12.5rem",
  display: "block",
  margin: "auto",
}

export default Spinner
