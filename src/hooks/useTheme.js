import { useState } from "react"

export default function useTheme(initialTheme = "dark") {
  const [theme, _setTheme] = useState(initialTheme)

  function setTheme() {
    if (theme === "dark") {
      _setTheme("light")
    } else {
      _setTheme("dark")
    }
  }

  return [theme, setTheme]
}
