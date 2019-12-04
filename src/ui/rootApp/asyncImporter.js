import React, { Component } from 'react'
import { Layout } from 'ui/components/Layout'

export default function asyncImporter(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        component: null
      }
    }

    async componentDidMount() {
      const { default: component } = await importComponent()

      this.setState({
        component: component
      })
    }

    render() {
      const Component = this.state.component

      return Component ? <Component {...this.props} /> : <Layout />
    }
  }

  return AsyncComponent
}
