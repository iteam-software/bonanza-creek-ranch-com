import React from "react"
import { Link } from "gatsby"

import "./nav-item.scss"

export default function NavItem({ to, children }) {
  return (
    <Link activeClassName="active" className="nav-item" to={to}>
      {children}
    </Link>
  )
}
