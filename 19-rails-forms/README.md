# Goals
- forms
- rails helpers
  - form_for
    - make your life easier
    - same code for new and edit
    - try to use whenever you can
  - form_tag
    - an arg of a action
    - assumes a post default
    - for each tag a string or symbol argument that it makes into a name
    - sign in and sign out
    - when you need to go really custom
  - link_to
  - button_tag
  - submit_tag
- strong params
- smart controllers
- [private methods](http://ruby-for-beginners.rubymonstas.org/advanced/private_methods.html)
- refactoring repetitive code

#
```ruby
<%= form_tag('/burgers') do %>
  <%= label_tag('burger[name]', 'Name') %>
  <%= text_field_tag('burger[name]') %>
  <%= label_tag('burger[price]', 'Price') %>
  <%= number_field_tag('burger[price]', nil, {step: '.01'}) %>
  <%= label_tag('burger[meat_true]', 'Has Meat') %>
  <%= radio_button_tag('burger[meat]', true, true) %>
  <%= label_tag('burger[meat_false]', 'Is Veggie') %>
  <%= radio_button_tag('burger[meat]', false, false) %>
  <%= submit_tag('Make a burger') %>
<% end %>
```