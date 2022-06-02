import PropTypes from 'prop-types'
import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = {
      pathname: '',
      hasError: false
    }
  }

  static getDerivedStateFromError() {
    return {
      hasError: true,
      pathname: window.location.pathname
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.hasError && window.location.pathname !== prevState.pathname) {
      return {
        hasError: false,
        pathname: ''
      }
    }
    return null
  }

  render() {
    if (this.state.hasError) {
      return (this.props.localBoundary?.() ?? <h1>Something went wrong.</h1>)
    }

    return this.props.children
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
  localBoundary: PropTypes.func
}

export { ErrorBoundary }
