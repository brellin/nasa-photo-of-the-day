import React, { useEffect, useState } from "react"
import axios from 'axios'
import "./App.scss"

function App() {

  const [state, setState] = useState({ default: false })

  useEffect(() => {

    axios.get('https://api.nasa.gov/planetary/apod?api_key=BDe7RgqHPuZGj6iDu2KoCvE6WfbDsJb4QLTWHwgx')
      .then(({ data }) => setState({
        default: true,
        data
      }))
      .catch(err => console.log(err))

  }, [state.default])

  console.log(state)

  if (!state.default) {

    return <h2>Loading...</h2>

  } else {

    return (
      <div className="cont">
        <h2>{state.data.title}</h2>
        <iframe src={state.data.url} title={state.data.title} />
        <p>{state.data.explanation}</p>
      </div>
    )

  }

}

export default App
