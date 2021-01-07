import { useContext } from "react"
import "./Header.css"

import { ThemeContext } from "../../ThemeContext"

function Header () {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <>
    <header className={theme}>
      <h1>Welcome my site</h1>

      <select defaultValue={theme} onChange={evt => { setTheme(evt.target.value) }} name="theme" id="themeSelect">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>
    </header>
    </>
  )
}

export default Header