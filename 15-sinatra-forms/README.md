# Lecture Goals
- define REST
- define CRUD
<!-- - understand MVC directory structure -->
- implement RESTful Routing
- describe how the HTTP verbs correspond to REST
- write form templates in HTML with ERB
- build params hash from forms
  - structure params hash using names and values of form inputs
  - param hash keys => form input names
  - param hash values => form input values
  - nest our params => form input name a top level key and a lower level key
    - book[author]
- Hacking the internet - SINATRA SPECIFIC
  - HTML does not support requests other than post and get
  - tell controller about our override
  - make the form look like a post, add secret input
  - secret input has type 'hidden', name '_method', and value of the real request type we want

# REST
- REpresentational State Transfer
- convention, design pattern people have agreed on

# To make information accesible to the view
- declare variables with `@`

# HTTP verb or method
- get, post, patch, delete, put

# Route or action
- 'books/, '/books/:id'

# Template Name, Filename of View
- :index, :show

## Create
- GET, '/books/new', template: :new, FORM for NEW BOOK
- POST, '/books', redirect

## Read
- GET '/books', template: :index
- GET '/books/:title' or '/books/:id', template: :show

## Update
- GET, '/books/:id/edit', template: :edit, FORM to update Book
- PATCH, '/books/:id', redirect

## Destroy
- DELETE, '/books/:id'
















asdfasdf
