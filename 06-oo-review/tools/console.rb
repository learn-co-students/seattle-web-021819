require_relative '../config/environment.rb'

def reload
  load 'config/environment.rb'
end

# Important note! This is not an ideal test file, since we only created one
# theater instance. But it reflects what we got through in the lecture.

puts "-------------Initializing Musical instances-----------------"
oklahoma = Musical.new("Oklahoma", "Oklahoma City")
puts "oklahoma: #{oklahoma.inspect}"
the_producers = Musical.new("The Producers", "New York City")
puts "the_producers: #{the_producers.inspect}"
rent = Musical.new("RENT", "New York City")
puts "rent: #{rent.inspect}"
puts

puts "----------Testing Musical.all_introductions--------------------"
Musical.all_introductions
puts

puts "------------Initializing Theater instance---------------------"
neil_simon_theatre = Theater.new("Neil Simon Theatre", "New York City")
puts "neil_simon_theatre: #{neil_simon_theatre.inspect}"
puts

puts "------------Initializing Performance instances-------------------"
p1 = Performance.new("2019-01-05", oklahoma, neil_simon_theatre)
puts "p1: #{p1.inspect}"
p2 = Performance.new("2019-01-06", the_producers, neil_simon_theatre)
puts "p2: #{p2.inspect}"
p3 = Performance.new("2019-02-25", oklahoma, neil_simon_theatre)
puts "p3: #{p3.inspect}"
puts

puts "----------------Testing Performance#hometown_setting?-----------"
puts "p1.hometown_setting? #{p1.hometown_setting?}"
puts "p2.hometown_setting? #{p2.hometown_setting?}"
puts

puts "-------------------Testing Musical#perform_in_theater-------------"
puts "p4 = rent.perform_in_theater(neil_simon_theatre, \"2019-02-25\")"
p4 = rent.perform_in_theater(neil_simon_theatre, "2019-02-25")
puts "p4: #{p4.inspect}"

p5 = Performance.all.find do |performance|
  performance.theater == neil_simon_theatre && performance.musical == rent
end
puts "Theater and musical correctly set? #{p4 == p5}"
puts

puts "-----------------------Testing Musical#performances-------------------"
puts "Oklahoma has #{oklahoma.performances.count} performance(s)"
puts "The Producers has #{the_producers.performances.count} performance(s)"
puts

puts "-------------------Testing Musical#theaters-------------------------"
puts "Rent theaters: #{rent.theaters.map {|theater| theater.title}}"
puts "Oklahoma theaters: #{oklahoma.theaters.map {|theater| theater.title}}"
puts "^This is kind of weird!  We didn't specify *unique* theaters, so Neil Simon Theatre appears twice because Oklahoma was performed there twice"
puts

puts "----------------------Testing Theater#performances--------------------"
puts "Neil Simon Theatre has #{neil_simon_theatre.performances.count} performances"
puts

puts "------------------------Testing Theater#musicals----------------------"
puts "Neil Simon Theatre musicals: #{neil_simon_theatre.musicals.map {|musical| musical.name}}"
puts "^These are ordered by the order they were created"
puts

binding.pry
0
