require 'pry'
require './Book'

hp1 = Book.new("Harry Potter 1")
hp1.author = "JK Rowling"

hp2 = Book.new("Harry Potter 2")
hp2.author = "JK Rowling"

moby = Book.new("Moby Dick")
moby.author = "Hermin Melville"

puts hp1.title
puts hp2.title
puts moby.title
puts

puts "Reading HP1"
hp1.turn_page
hp1.turn_page
hp1.turn_page
hp1.turn_page
hp1.turn_page
puts

puts "Starting HP2"
hp2.turn_page
puts

puts "All Books"
puts Book.all
puts

puts "Find JK Rowling's Books"
author = "JK Rowling"
puts Book.find_books_by_author(author)

binding.pry