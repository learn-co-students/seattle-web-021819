require './Player'

alan_anderson = Player.new("Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1)    
michael_jordan = Player.new("Michael Jordan", 32, 54, 56, 245 ,456, 75, 64, 190)    
puts alan_anderson
puts alan_anderson.player_name
puts 

puts michael_jordan
puts michael_jordan.player_name
puts

alan_anderson.player_name = "Al Anderson"
puts alan_anderson.player_name
puts

puts alan_anderson.brag
puts michael_jordan.brag
puts

puts "Steals"
puts alan_anderson.steals
puts michael_jordan.steals
puts

puts "Number"
puts alan_anderson.number
puts michael_jordan.number
puts

puts alan_anderson.number = 99
puts michael_jordan.number = 23