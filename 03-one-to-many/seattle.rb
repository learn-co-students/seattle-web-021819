require_relative './point'

space_needle = Point.new(47.620467, -122.349170)
flatiron = Point.new(47.609192, -122.336342)

puts "Distance from Space Needle to campus"
puts space_needle.distance(flatiron)

puts "Point.get_all_points"
Point.get_all_points.each do |point|
    puts point
end
puts

puts "instance.get_all_points"
space_needle.get_all_points.each do |point|
    puts point
end