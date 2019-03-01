# orms-active-record-intro

## SWBATs

* Define Object Relational Mapper \(ORM\)
* Describe how gems work and the value of shared code
* Implement ActiveRecord in their projects
* Practice creating migrations for updating the database structure
* Explain how `rake` works and how to run rake tasks
* Distinguish between and define "model", "class", and "table"
* Practice with ActiveRecord::Base instance and class methods
* Perform persistent CRUD actions on one model using ActiveRecord

### Rake and File Structure

* Rake
  * Define tasks, based off of a similar tool in C-lang called Make
  * We have a Rakefile that defines tasks to be run from the command line
  * To view tasks, run `rake -T` in directory with Rakefile in itself or parent
  * Tasks can be arbitrary, they're just a way to encapsulate reusable ruby code that you want to execute from the command line
  * We're getting some tasks from the `sinatra/activerecord/rake` library which gives us easy to use ActiveRecord tasks
* File structure
  * Gemfile
  * `lib` folder holds models and app code
  * `db` directory holds migrations and seeds.rb file
  * `config` holds environment file
    * `require 'bundler'` and `Bundler.require` load all of the gems in our Gemfile
    * `ActiveRecord::Base.establish_connection` sets up our database with options hash
    * `require_all` loads all of our application code

### Migrations and Database Structure

* we want to create our first model \(class + table\)
* to get our database set up, we need to use the `rake db:create_migration` task
  * run without passing a name parameter and show the error and walk through it
  * run it with a name parameter that's meaningful like `create_<table_name>`
  * create the migrations you know you'll need up-front
* check out the migrations in the `db/migrations` folder
  * what is the sequence of numbers in the beginning of the file name?
  * how and why does activerecord use this?
  * defining `change` methods and `up` and `down` methods in migrations
  * make sure the two models you choose are related \(one-to-many\)
* `create_table` method which takes a block, the block takes a table builder
  * why do we use the `t` variable?
  * `t.string :name` what is the `string` method declaring?
  * what is the argument to the `string` method and the data type? `:name`
  * the methods defined on the table `t` are the data types we want to use
  * how do we add foreign keys to a related table? which table does it go on?
* run migrations `rake db:migrate`
  * show what a successful migration looks like
  * run the migrations again to show what it looks like when all of your migrations are run
  * break down the output of the success and error outputs
* how does activerecord keep track of migrations that have been run?
  * reread the output of a successful migration, look at the number
  * compare the number with the number in the filename for that migration
  * the schema and db files are generated from the migrations with sqlite3
  * look at `schema.rb` which is the authoritative representation of the database structure
  * look at the `version` argument in the schema to fsee if it matches with the last successful migration
* migration conventions
  * file name and class name must match up exactly, but in different case
  * create\_table block argument is usually a `t`

### Connecting Models to ActiveRecord

* create a model file in `lib/models`
  * convention is to have the model class name singular and the sql table plural
* create a class in that folder with your model name and inherit from `ActiveRecord::Base`
* see if we can already create instances by opening up the console
* check first to see if Book is defined
  * it will say uninitialized constant if it's not defined
* create a few instances with `Model.create(attributes)`
  * inspect the model and view how the object is output as a string
  * look at the class name as well as the attributes
* create an associated model with `AssociatedModel.create(attributes)`
  * associate these models by using the foreign key instead of AR associations
* inspect either model by calling these methods
  * `instance.class` shows the class name and the columns
  * `instance.methods`
    * even without writing any methods in the class, there are a TON \(362?\)
    * look for the attribute accessors that are auto-generated from column names
* write a method on the models
  * a nice first method to write is the association \(not using macros\) for each

```ruby
class Book < ActiveRecord::Base
  def author
    Author.find(self.author_id)
  end
end
#...
class Author < ActiveRecord::Base
  def books
    Book.where(author_id: self.id)
  end
end
```

### Methods from ActiveRecord

* Model.new
  * creates a new instance in local memory without persistence
* Model\#save
  * inserts or updates instance in db
* Model.create
  * Model.new + Model\#save
* Model.all
  * all instances
* Model.first
  * instance with the lowest ID in the db
* Model.find
  * also find by id
* Model.find\_by\({ attribute: value }\)
  * can find by one attribute-value pair or multiple
* Custom sql with Model

# orms-active-record-associations

## SWBATs

* Explain how ActiveRecord works for non-related models
* Implement one-to-many relationships using ActiveRecord `has_many` and `belongs_to`
* Implement many-to-many relationships using ActiveRecord `has_many, :through`
* Describe the methods that the relationship macros add to a model
* Practice looking up library documentation
  * Specifically, looking up documentation for ActiveRecord
    * Migrations
    * Association Macros
    * Rake tasks

### Project Setup

#### File structure

Follow project setup from previous lectures, but go over them once more to explain what each file is doing, why we have each directory, and how everything fits together.

This is a time to go over the domain as well. Make a domain that has both types of relationships that we go over: one-to-many and many-to-many.

#### Migrations

* syntax for creating a migration in the command line
* writing out the actual migration in the migration file
* start with models that don't need foreign keys and migrate those
* show the schema.rb after each migration
* write out migrations that need foreign keys and question the class as to why they need them on those tables
* run all migrations and check the schema before moving on

#### Models

* setup your models one-on-one and test each
* use `ActiveRecord::Base.logger = Logger.new(STDOUT)` to show sql queries from AR

### Our First ActiveRecord Relationships

* set up a belongs\_to association and demo it in console `doctor.department.name`
* set up a has\_many association and demo it `department.doctors`
  * this is like an array, but inspect the class and view the methods
* emphasize inverse relationships
* set up a has\_many through association and demo it `patient.doctors`
* build out all relationships, test, and view sql queries

### Macros and Methods Created

* define macro as a method call that creates functions
* show rails guide and how each association creates new methods for class
* shovel items into a through collection and view sql
* mass assignment with instances of other classes instead of native types
* show how join instances are created automatically

### Wrap Up

* demonstrate what activerecord::base gives us
* difference between new \(+ save\) and create
* difference between changing attributes \(+ save\) and update
* if something has a foreign\_key it belongs to the table from the foreign key
* if we do the belongs\_to, we need to include the inverse has many
* if you get an undefined method error, you need to include the macros
* if there are linked relationships, you can use through as an option to has many
* 1000 times easier than writing sql

### Defining Relationships

```ruby
class Author < ApplicationRecord
  has_many :books
  # Is the same as:
  def books
    Book.all.find(self.id)
  end

 has_many :written_books, classname: "Book"
  # can be written as:
  def written_books
    Book.all.find(self.id)
  end
end

class Book < ApplicationRecord
  belongs_to :author
end

```
