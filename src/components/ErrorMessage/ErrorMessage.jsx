import React from "react"
import PropTypes from "prop-types"

import "./error-message.css"

export default function ErrorMessage({ error }) {
  return (
    <div className="error-message">
      <h1 className="error-message__title">Sorry, something went wrong!</h1>

      <p>{error}</p>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="error-message__icon"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  )
}

ErrorMessage.propTypes = {
  error: PropTypes.string,
}
