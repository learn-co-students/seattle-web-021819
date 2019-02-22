require_relative './point'

space_needle = Point.new(47.620467, -122.349170)
flatiron = Point.new(47.609192, -122.336342)

puts "Distance from Space Needle to campus"
puts space_needle.distance(flatiron)