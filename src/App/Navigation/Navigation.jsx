import React from "react"
import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import classNamesHelper from "classnames"

import ThemeButton from "./ThemeButton/ThemeButton"

import "./navigation.css"

export default function Navigation({ onThemeChange, theme }) {
  const location = useLocation()
  const pathname = location.pathname

  return (
    <nav className="navigation">
      <Link
        className={classNamesHelper(
          "navigation__item",
          pathname === "/" && "navigation__item--active"
        )}
        to="/"
      >
        Home
      </Link>

      <Link
        className={classNamesHelper(
          "navigation__item",
          pathname === "/characters" && "navigation__item--active"
        )}
        to="/characters"
      >
        Characters
      </Link>

      <Link
        className={classNamesHelper(
          "navigation__item",
          pathname === "/episodes" && "navigation__item--active"
        )}
        to="/episodes"
      >
        Episodes
      </Link>

      <ThemeButton onThemeChange={onThemeChange} theme={theme} />
    </nav>
  )
}

Navigation.propTypes = {
  onThemeChange: PropTypes.func,
  theme: PropTypes.string,
}
