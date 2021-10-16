import React, { Component, useEffect, useState } from "react"
import logo from "./logo.svg"
import "./App.css"

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/status")
      .then((response) => response.json())
      .then((response) => setData(response))
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Hello world!</h1>
      </header>
      <p className="App-intro">{!data ? "Loading..." : data}</p>
    </div>
  )
}

export default App
