import { useEffect, useState } from "react"

import "./Login.css"

function Login () {

  const [ userName, setUserName ] = useState("")
  const [ userPassword, setUserPassword ] = useState("")

  const [ disabled, setDisabled ] = useState(true)
  useEffect(() => {

    if(userName.length > 3 && userPassword.length > 5) {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }, [userName, userPassword])

  return (
    <>

      <div className="container">
        <select name="theme" id="themeSelect">
          <option value="dark">Dark</option>
          <option value="light">Light</option>
        </select>

        <input onChange={evt => { setUserName(evt.target.value)}} type="text" placeholder="John"/>

        <input onChange={evt => { setUserPassword(evt.target.value)}} type="password" placeholder="password" />

        <button disabled={disabled}>Submit</button>
      </div>
    </>
  )
}

export default Login