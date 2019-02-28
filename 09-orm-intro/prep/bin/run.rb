require_relative '../config/environment'

puts City.all
puts

spokane = City.new(name: "Spokane", population: 217_108, state_id: 1)
puts spokane