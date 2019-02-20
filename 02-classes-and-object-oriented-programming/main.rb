require 'pry'
require "./Point"

p0 = Point.new
p1 = Point.new(0, 0)
p2 = Point.new(3, 3)
p3 = Point.new(4, 5)
p4 = Point.new(10, 10)

puts p1
puts p2
puts p3
puts p4
puts

puts p2.distance_from(p4)
puts p3.distance_from_origin
puts

puts Point.distance_between(50, 50, 100, 100)
puts

puts p3.send(:distance_from_origin)
puts

puts 1.send(:+, 7)
puts 1.send(:send, :+, 7)
puts 1.send(:send, :send, :send, :send, :send, :+, 7)
