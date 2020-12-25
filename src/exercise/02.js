// useEffect: persistent state
// http://localhost:3000/isolated/exercise/02.js

import React from 'react'

const useLocalStorageState = (key, value) => {
  const [storedValue, setStoredValue] = React.useState(() => window.localStorage.getItem(key) || value);
  
  React.useEffect(() => {
    window.localStorage.setItem(key, storedValue);
  }, [storedValue]);

  return [storedValue, setStoredValue];
};

function Greeting({initialName = ''}) {
  // 🐨 initialize the state to the value from localStorage
  // 💰 window.localStorage.getItem('name') || initialName
  // const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName)
  const [name, setName] = useLocalStorageState('name', initialName);
  // 🐨 Here's where you'll use `React.useEffect`.
  // The callback should set the `name` in localStorage.
  // 💰 window.localStorage.setItem('name', name)
  // React.useEffect(() => {
  //   window.localStorage.setItem('name', name);
  // }, [name]);

  function handleChange(event) {
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input onChange={handleChange} id="name" />
      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  return <Greeting />
}

export default App
