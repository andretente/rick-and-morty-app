import { useState } from "react"
import classNamesHelper from "classnames"

import HomePage from "../../pages/HomePage/HomePage"
import CharactersPage from "../../pages/CharactersPage/CharactersPage"

import "./app.css"

function App() {
  const [currentPage, setCurrentPage] = useState("home")

  return (
    <>
      {/* Temporary navigation */}
      <nav className="navigation">
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "home" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("home")}
        >
          Home
        </button>
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "characters" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("characters")}
        >
          Characters
        </button>
      </nav>
      {/* Temporary navigation */}

      <div className="app">
        {currentPage === "home" && <HomePage />}

        {currentPage === "characters" && <CharactersPage />}
      </div>
    </>
  )
}

export default App
