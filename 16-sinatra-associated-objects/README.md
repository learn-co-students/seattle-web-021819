
# Deliverables
  As a site visitor,
   - I should be able to see a list of books
   - I should be able to click on each book title to see more information about that book
   - I should be able to see a list of authors
   - I should be able to associate a book with an existing author when I create it

# Steps Towards Multiple Resources
  - create migrations
    - add authors table
    - remove author name and add author id to books
  - create relationships between models
    - authors hm books
    - books bt author
  - separate controller files
    - tell config.ru about new controller
  - create views directory for each resource
    - tell each controller about views directory
  - add dropdowns to your forms to connect with other resources
    - structure your params in the best way to sue the data


# Stretch
  - from book page, go to author
  - on author page, see all books

# Discuss
- does this affect the schema?
- what new routes might I need?
- what updates might I need to existing views

## REST
- REpresentational State Transfer
- convention, design pattern people have agreed on

## HTTP verb or method
- get, post, patch, delete, put

## Route or action
- 'books/, '/books/:id'

## Template Name, Filename of View
- :index, :show

### Create
- GET, '/books/new', template: :new, FORM for NEW BOOK
- POST, '/books', redirect

### Read
- GET '/books', template: :index
- GET '/books/:title' or '/books/:id', template: :show

### Update
- GET, '/books/:id/edit', template: :edit, FORM to update Book
- PATCH, '/books/:id', redirect

### Destroy
GET?
- DELETE, '/books/:id'






