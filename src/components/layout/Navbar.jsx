import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Navbar = ({ title, icon }) => {
  return (
    <div className="navbar bg-primary">
      <h1>
        <i className={icon} />
        {title}
      </h1>
      <ul>
        <li>
          {/* We use Link instead of a tags to ensure that if we navigate away from a page, we gat back our exact state, whenn we navigate back */}
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  )
}

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
}

export default Navbar
