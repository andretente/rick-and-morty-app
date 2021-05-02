import React from "react"
import classNamesHelper from "classnames"
import PropTypes from "prop-types"

import "./load-more-button.css"
import { useGlobalState } from "../../../App/App"

export default function LoadMoreButton({ className, onClick }) {
  const globalState = useGlobalState()
  const theme = globalState.theme

  return (
    <button
      className={classNamesHelper(
        "load-more-button",
        theme === "dark" ? "load-more-button--dark" : "load-more-button--light",
        className
      )}
      onClick={onClick}
    >
      <span className="load-more-button__text">Load more</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="load-more-button__icon"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </button>
  )
}

LoadMoreButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
}
