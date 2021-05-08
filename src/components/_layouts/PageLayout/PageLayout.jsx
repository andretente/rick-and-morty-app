import React from "react"
import classNamesHelper from "classnames"
import PropTypes from "prop-types"

import "./page-layout.css"

export default function PageLayout({
  children,
  className,
  forwardRef,
  onScroll,
}) {
  return (
    <div
      ref={forwardRef}
      className={classNamesHelper("page-layout", className)}
      onScroll={onScroll}
    >
      {children}
    </div>
  )
}

PageLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  forwardRef: PropTypes.object,
  onScroll: PropTypes.func,
}
