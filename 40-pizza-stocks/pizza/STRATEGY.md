# How to code Pizza app
## Fetching Initial Data
* cloned the repo
* installed dependencies
* ran the react server
* ran the db server
* decided where to place the fetch
* fetched db data from db server
* determine state in our constructor

## Wiring props
* create a handleEditClick function in App
* pass handleEditClick through all components
* make sure to have handleEditClick the
  same name all the time it's passed
* make sure not to conflict with the built-in
  onClick event handler that's on components

## Passing Data Up
* send individual pizza data back up to App
* sent `props.pizza` as a parameter
* we needed to wrap the handleEditClick function
  inside the Pizza component with an arrow
  to make sure the handleEditClick function
  wasn't called immediately when we defined
  the onClick handler there.
* We needed to add a `pizza` parameter to
  the handleEditClick function inside App.
