import React, { useEffect, useState } from "react"

import cx from 'classnames'
import css from './App.module.scss'

import { Header } from "./widgets/header/Header"
import { ReactComponent as Intro } from './components/icons/intro.svg'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch("/api/status")
      .then((response) => response.json())
      .then((response) => setData(response))
  })
  return (
    <div className="App">
      <Header />
      <Intro className={cx(css.intro)} />
    </div>
  )
}

export default App
