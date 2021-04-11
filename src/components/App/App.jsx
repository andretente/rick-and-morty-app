import { useState } from "react"
import classNamesHelper from "classnames"

import HomePage from "../../pages/HomePage/HomePage"
import CharactersPage from "../../pages/CharactersPage/CharactersPage"
import CounterPageExample from "../../pages/CounterPage/CounterPage"

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
        <button
          className={classNamesHelper(
            "navigation__item",
            currentPage === "counter" && "navigation__item--active"
          )}
          onClick={() => setCurrentPage("counter")}
        >
          Counter (Temporary)
        </button>
      </nav>
      {/* Temporary navigation */}

      <div className="app">
        {currentPage === "home" && <HomePage />}

        {currentPage === "characters" && <CharactersPage />}

        {/* Temporary page */}
        {currentPage === "counter" && <CounterPageExample />}
        {/* Temporary page */}
      </div>
    </>
  )
}

export default App
