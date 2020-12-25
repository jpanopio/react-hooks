// Lifting state
// http://localhost:3000/isolated/exercise/03.js

import React from 'react'

function Name() {
  const [name, setName] = React.useState('')
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input id="name" value={name} onChange={event => setName(event.target.value)} />
    </div>
  )
}

// 🐨 accept `animal` and `onAnimalChange` props to this component
function FavoriteAnimal(props) {
  const { animal, onAnimalChange } = props;
  // 💣 delete this, it's now managed by the App

  return (
    <div>
      <label htmlFor="animal">Favorite Animal: </label>
      <input
        id="animal"
        value={animal}
        onChange={event => onAnimalChange(event.target.value)}
      />
    </div>
  )
}

// 🐨 uncomment this
function Display({animal}) {
  return <div>{`Your favorite animal is: ${animal}!`}</div>
}

function App() {
  // 🐨 add a useState for the animal
  const [animal, onAnimalChange] = React.useState('')

  return (
    <form>
      <Name />
      {/* 🐨 pass the animal and onAnimalChange prop here (similar to the Name component above) */}
      <FavoriteAnimal animal={animal} onAnimalChange={onAnimalChange} />
      {/* 🐨 pass the animal prop here */}
      <Display animal={animal} />
    </form>
  )
}

export default App
