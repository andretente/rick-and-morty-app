import React from "react"
import classNamesHelper from "classnames"
import PropTypes from "prop-types"

import "./scroll-bar.css"

export default function ScrollBar({ className, forwardRef, width }) {
  return (
    <span
      ref={forwardRef}
      className={classNamesHelper("scroll-bar", className)}
      style={{ width: `${width}px` }}
    />
  )
}

ScrollBar.propTypes = {
  className: PropTypes.string,
  forwardRef: PropTypes.object,
  width: PropTypes.number,
}
