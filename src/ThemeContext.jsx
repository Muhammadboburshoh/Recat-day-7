import { createContext, useState, useEffect } from "react"

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

  const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "dark")

  useEffect(() => {

    window.localStorage.setItem("theme", theme)
    console.log(theme)
  }, [theme])

  return (
    <ThemeContext.Provider  value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export {
  ThemeProvider,
  ThemeContext,
}
