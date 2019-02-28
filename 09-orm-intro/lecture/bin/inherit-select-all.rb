require_relative('../config/environment')

puts "Running!"

DB[:conn].execute("SELECT * FROM cities;")

puts "Querying for all cities"
puts City.all
puts

puts "Querying for all states"
puts State.all
puts

binding.pry