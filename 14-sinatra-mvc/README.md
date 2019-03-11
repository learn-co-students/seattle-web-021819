# Learning Goals
- Sinatra is a DSL, sits on top of Ruby and Rack to give us extra functionality and abstraction
- Explain the Model View Controller (MVC) pattern and give an example
- Explain how web frameworks (like Sinatra) use the MVC pattern and why
- Define 'convention over configuration'
- Demonstrate how the params hash changes and where the data comes from
- Discuss ERB Template
  - we can write ruby inside html
  - squids print
  - ice cream cones evaluate but don't print
- Practice file structure in Sinatra
- Identify the connection between REST and CRUD

# Deliverables
- make an web interface for CRUD actions for one resource

# Rack
- we receive a web request, send back conditional response based on that information

# Domain Specific Language
- language on top of a language

# Model - kitchen
- connected to database/migrations
- relationships between objects
- code that users don't directly interact with

# View - customer
- presentational
- html structure

# Controller - waiter
- go between

# CRUD
- create
- read
- update
- delete/destroy

# REST
- REpresentation State Transfer

## Read
- GET '/books', :index
- GET '/books/:title', '/books/id' :show
