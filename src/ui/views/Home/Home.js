import React from 'react'
import { Layout } from 'ui/components/Layout'
import logo from 'ui/static/svg/logo.svg'
import 'ui/static/css/Home/Home.css'

export default () => (
  <div>
    <Layout>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a
            className="App-link"
            href="https://create-react-app.dev/docs/getting-started"
            target="_blank"
            rel="noopener noreferrer"
          >
            More about create-react-app
          </a>
        </header>
      </div>
    </Layout>
  </div>
)
