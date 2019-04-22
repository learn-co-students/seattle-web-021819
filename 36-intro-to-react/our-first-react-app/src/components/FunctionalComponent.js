import React from 'react'

// instead of having an entire class that extends from Component
// we create just one function that accepts props and immediately
// returns JSX that renders any of those props. These are more
// lightweight components that don't require everything else a
// class component gives us.
const FunctionalComponent = (props) => {
  return <div>
    <p>Superhero name: {props.superhero}</p>
    <p>Normal name: {props.normal_name}</p>
  </div>
}
export default FunctionalComponent;