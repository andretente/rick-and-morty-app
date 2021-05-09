import { createContext, useContext, useState } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import classNamesHelper from "classnames"
import { QueryClient, QueryClientProvider } from "react-query"

import HomePage from "../pages/HomePage/HomePage"
import CharactersPage from "../pages/CharactersPage/CharactersPage"
import EpisodesPage from "../pages/EpisodesPage/EpisodesPage"

import "./app.css"
import Navigation from "./Navigation/Navigation"
import CharacterPage from "../pages/CharactersPage/CharacterPage/CharacterPage"
import useTheme from "../hooks/useTheme"

export const AppContext = createContext()

export function useGlobalState() {
  const globalState = useContext(AppContext)

  return globalState
}

const queryClient = new QueryClient()

function App() {
  const [theme, setTheme] = useTheme("light")

  const [episodesPageData, setEpisdesPageData] = useState(null)

  const globalState = {
    theme,

    episodesPageData,
    setEpisdesPageData,
  }

  return (
    <div
      className={classNamesHelper(
        "app",
        theme === "dark" ? "app--dark" : "app--light"
      )}
    >
      <AppContext.Provider value={globalState}>
        <QueryClientProvider client={queryClient}>
          <Router basename="/rick-and-morty-app">
            <Navigation onThemeChange={setTheme} theme={theme} />

            <Switch>
              <Route path="/characters">
                <CharactersPage />
              </Route>

              <Route path="/character/:id">
                <CharacterPage />
              </Route>

              <Route path="/episodes">
                <EpisodesPage />
              </Route>

              <Route path="/">
                <HomePage />
              </Route>
            </Switch>
          </Router>
        </QueryClientProvider>
      </AppContext.Provider>
    </div>
  )
}

export default App
