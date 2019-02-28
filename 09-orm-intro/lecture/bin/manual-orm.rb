require_relative('../config/environment')

# let's interact with Yakima and Bellingham,
# but they're not going to be saved in the DB
yakima = City.new(name: "Yakima", population: 170_000, state_id: 1)
bellingham = City.new(population: 240_000, name: "Bellingham", state_id: 1)

# actually, do save Yakima
yakima.save

puts "Yakima and Bellingham"
puts yakima
puts bellingham

puts "Seattle"
seattle = City.create(name: "Seattle", population: 724_745, state_id: 1)
puts seattle
puts

puts "Portland"
portland = City.find_by_name("Portland")
puts portland
puts


puts "Look at all cities"
puts City.all.count
puts

puts "Test find_or_create"
san_fran = City.find_or_create_by(name: "San Francisco", population: 880_000, state_id: 3)
walla_walla = City.find_or_create_by(name: "Walla Walla", population: 9342, state_id: 1)
fake_random_new_town = City.find_or_create_by(name: "Fake #{rand}", population: (1000*rand).floor, state_id: 1)
puts san_fran
puts walla_walla
puts

puts "Look at all cities"
puts City.all.count
puts