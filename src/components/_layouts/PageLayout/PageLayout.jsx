import React from "react"
import classNamesHelper from "classnames"
import PropTypes from "prop-types"

import "./page-layout.css"

export default function PageLayout({ children, className }) {
  return (
    <div className={classNamesHelper("page-layout", className)}>{children}</div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
}
