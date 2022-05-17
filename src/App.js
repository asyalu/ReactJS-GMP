import React, { useState } from 'react'
import './App.css';

function Counter() {
  const [count, setCount] = useState(0)

  const increase = () => {
    setCount(count + 1)
  }

  const decrease = () => {
    setCount(count - 1)
  }

  return (
    React.createElement('div', null, 
      React.createElement('div', null, `${count}`),
      React.createElement('div', null, 
        React.createElement('button', {onClick: increase}, '+'),
        React.createElement('button', {onClick: decrease}, '-')
      )
    )
  )
}

class SearchForm extends React.PureComponent {
  render() {
    return (
      <div>
        <Input />
        <SearchButton />
      </div>
    )
  }
    
}

class SearchButton extends React.Component {
  onClick = () => {
    alert('Nothing found :(')
  }

  render () {
    return (
      <button onClick={this.onClick}> 
        Search
      </button>
    )
    
  }
}

const Input = () => (
  <input />
)

const GenreToggle = () => {
  const handleClick = (e) => {
    for (let i = 0; i < e.target.parentElement.children.length; i++) {
      e.target.parentElement.children[i].style.background = ''
    }

    e.target.style.background = 'red'
  }

  return (
    <div onClick={handleClick}>
      <span>All</span>
      <span>Documentary</span>
      <span>Comedy</span>
      <span>Horror</span>
      <span>Crime</span>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <h1>HELLO WORD!</h1>
      <Counter />
      <SearchForm />
      <GenreToggle />
    </div>
  );
}

export default App;
