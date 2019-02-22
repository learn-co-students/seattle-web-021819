require_relative '../config/environment'

wa = State.new("Washington")
oregon = State.new("Oregon")

sea = City.new("Seattle", wa)
tac = City.new("Tacoma", wa)
pdx = City.new("Portland", oregon)

wa.cities << sea
wa.cities << tac
oregon.cities << pdx

puts "Cities inside WA State (Before)"
puts wa.cities
puts
puts "Cities inside OR State (Before)"
puts oregon.cities
puts

pdx.state = wa

puts "Cities inside WA State (After)"
puts wa.cities
puts

puts "Cities inside OR State (After)"
puts oregon.cities