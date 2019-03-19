# Forms
- params are a way of sending data from a view to a controller
  - strong_params
  - forbidden::attributes_error
  - require, permit
- forms
  - html is the same as sinatra
  - form_tag(path)
    - rails is somewhat in control
  - form_for(object)
    - rails is the real boss


# Goals
- more forms, more params
- building object relationships through forms
- collection_select helper
- refactoring repetitive code with before_actions

# Deliverables
- We are tracking restaurant burger offerings
- what do we need to set up in order to connect our burgers to restaurants

# Step
- rails g resource
  - model, migration, conrtroller
- rails g migration
  - class name of the migration, the column and data type

what files are we changing?
how do we set up the relationships?