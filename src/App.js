import React, { useState } from 'react'
import './App.css';

class Counter extends React.Component {
  state = {
    count: 0
  }

  static increase = () => {
    this.setState((state) => ({
      count: state.count + 1
    }))
  }

  static decrease = () => {
    this.setState((state) => ({
      count: state.count - 1
    }))
  }

  render() {
    return (
      React.createElement('div', null, 
        React.createElement('div', null, `${this.state.count}`),
        React.createElement('div', null, 
          React.createElement('button', {onClick: this.increase}, '+'),
          React.createElement('button', {onClick: this.decrease}, '-')
        )
      )
    )
  }
}

class SearchForm extends React.PureComponent {
  alertText = 'Nothing found :('

  render() {
    return (
      <>
        <input />
        <SearchButton alertText={this.alertText} />
      </>
    )
  }
}

class SearchButton extends React.Component {
  constructor(props) {
    super(props)
    this.alertText = this.props.alertText
  }

  static onClick = () => {
    alert(this.alertText)
  }

  render () {
    return (
      <button onClick={this.onClick}> 
        Search
      </button>
    )
    
  }
}

const ENUM_TITLES = ['All', 'Documentary', 'Comedy', 'Horror', 'Crime']

const GenreToggle = () => {
  const [activeTab, setActiveTab] = useState('')

  const handleClick = (e) => {
    setActiveTab(e.target.outerText)
  }

  const getStylesForActiveTab = (title) => (
    title === activeTab ? { background: 'red' } : null
  )

  return (
    <div onClick={handleClick}>
      {ENUM_TITLES.map((title) => (
        <span key={title} style={getStylesForActiveTab(title)}>{title}</span>
      ))}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD!</h1>
      <Counter />
      <SearchForm />
      <GenreToggle />
    </div>
  );
}

export default App;
