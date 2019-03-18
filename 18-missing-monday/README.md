# Missing Monday

- Hammering down on routes- what goes where- specifically w/ resources and all of the auto-generated methods rails gives us.
- Workflow. Maybe what order is good practice to write the MVC in. I've been feeling like we are getting the pieces of a project but not any pemdas order to do things. I know it's not always straight forward, but there must be some best practice.
- difference between text_field_tag and text_area_tag?
- what is a "resource" ?
- Im so confused about routes, I understood them perfectly in sinatra but in rails it really throws me off how the routes are now in a separate file and seem to play multiple roles now? IE give methods CRUD capabilities?
- difference between "rails g model", "rails g resource" , "rails g scaffold" ?

# Routes
- the switchboard to your application
- directs requests to controller code
- VERB 'ACTION', to: 'CONTROLLER#METHOD'
- `get '/books', to: 'books#index'`
- `get '/books/:id', to: 'books#show'`


# pemdas
- No route matches [GET] "/films"
- uninitialized constant FilmsController
- The action 'index' could not be found for FilmsController
- FilmsController#index is missing a template for this request format and variant
- the last errors are view errors
  - calling a method on something that is nil

# Resource
- an object that we are storing data on and tracking in our application

# Generators
- scaffold: NO GO
  - enough to support our entire application
  - migrations, models, controllers with methods written, views and added resources to routes
- resource
  - model, migrations, controller with no methods, views directory, routes
- model
  - model, migration
- controller
  - view directory, controller file

