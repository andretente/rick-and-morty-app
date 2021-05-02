import React from "react"
import classNamesHelper from "classnames"
import PropTypes from "prop-types"

import { useGlobalState } from "../../App/App"

import "./search-bar.css"

export default function SearchBar({ className, onChange, onSubmit }) {
  const globalState = useGlobalState()
  const theme = globalState.theme

  function onSubmitHandler(event) {
    event.preventDefault()

    const formData = new FormData(event.target)
    const searchValue = formData.get("search")

    onSubmit?.(searchValue)
  }

  function onChangeHandler(event) {
    event.preventDefault()

    const searchValue = event.target.value

    onChange?.(searchValue)
  }

  return (
    <form
      className={className}
      onSubmit={onSubmitHandler}
      onChange={onChangeHandler}
    >
      <div className="search-bar">
        <label>
          {!onSubmit && <span className="search-bar__label">Search</span>}

          <input
            className={classNamesHelper(
              "search-bar__input",
              theme === "dark"
                ? "search-bar__input--dark"
                : "search-bar__input--light"
            )}
            autoComplete="off"
            type="text"
            name="search"
          />
        </label>

        {onSubmit && (
          <button className="search-bar__button" type="submit">
            Search
          </button>
        )}
      </div>
    </form>
  )
}

SearchBar.propTypes = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func,
}
