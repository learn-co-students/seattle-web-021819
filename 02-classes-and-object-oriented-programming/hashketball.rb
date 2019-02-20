require 'pry'

# Shortcuts
# Commenting out whole blocks of code - CMD + /

# puts "HELLO"
# binding.pry

def game_hash

	# puts "BEEF"
	# binding.pry
 {
   home: {
     team_name: "Brooklyn Nets",
     colors: ["Black", "White"],
     players: [
       {
         player_name: "Alan Anderson",
         number: 0,
         shoe: 16,
         points: 22,
         rebounds: 12,
         assists: 12,
         steals: 3,
         blocks: 1,
         slam_dunks: 1
       }, {
         player_name: "Reggie Evans",
         number: 30,
         shoe: 14,
         points: 12,
         rebounds: 12,
         assists: 12,
         steals: 12,
         blocks: 12,
         slam_dunks: 7
       }, {
         player_name: "Brook Lopez",
         number: 11,
         shoe: 17,
         points: 17,
         rebounds: 19,
         assists: 10,
         steals: 3,
         blocks: 1,
         slam_dunks: 15
       }, {
         player_name: "Mason Plumlee",
         number: 1,
         shoe: 19,
         points: 26,
         rebounds: 12,
         assists: 6,
         steals: 3,
         blocks: 8,
         slam_dunks: 5
       }, {
         player_name: "Jason Terry",
         number: 31,
         shoe: 15,
         points: 19,
         rebounds: 2,
         assists: 2,
         steals: 4,
         blocks: 11,
         slam_dunks: 1
       }
     ]
   },
   away: {
     team_name: "Charlotte Hornets",
     colors: ["Turquoise", "Purple"],
     players: [
       {
         player_name: "Jeff Adrien",
         number: 4,
         shoe: 18,
         points: 10,
         rebounds: 1,
         assists: 1,
         steals: 2,
         blocks: 7,
         slam_dunks: 2
       }, {
         player_name: "Bismak Biyombo",
         number: 0,
         shoe: 16,
         points: 12,
         rebounds: 4,
         assists: 7,
         steals: 7,
         blocks: 15,
         slam_dunks: 10
       }, {
         player_name: "DeSagna Diop",
         number: 2,
         shoe: 14,
         points: 24,
         rebounds: 12,
         assists: 12,
         steals: 4,
         blocks: 5,
         slam_dunks: 5
       }, {
         player_name: "Ben Gordon",
         number: 8,
         shoe: 15,
         points: 33,
         rebounds: 3,
         assists: 2,
         steals: 1,
         blocks: 1,
         slam_dunks: 0
       }, {
         player_name: "Brendan Haywood",
         number: 33,
         shoe: 15,
         points: 6,
         rebounds: 12,
         assists: 12,
         steals: 22,
         blocks: 5,
         slam_dunks: 12
       }
     ]
   },

 }
end




# go into the home hash and the away hash and get the players from both


# go to each team and ask them for their list of players
# collect all my player names and put them in a single list

# we can iterate over the hashes store in home and away
# iterate again through the values of each player details and grab the player's name

# navigate to the location of our arrays within our data structure using the correct keys
# home_players = game_hash[:home][:players]
# away_players = game_hash[:away][:players]


# creates new variable which points to array of all players, but also destructively changes home_players
# all_players = home_players.concat(away_players)

# all_players = home_players + away_players


# push it into an array
# we can concatenate / add arrays
# iterate map/collect/each 
	# push into new array
# user reduce with initial array as first value

def num_points_scored(player_name)
	# iterate through the hash to get to the desired points value

	# iterate through the all_plauers to get to the desired points value
	# checking that the players name matches the name passed in as an argument

	# use each to iterate through all_players
	# found_player = nil

	# all_players.each do |player|
	# 	if (player[:player_name] == player_name)
	# 		found_player = player
	# 	end
	# end

	# return found_player[:points]

	# use map
	# use find



	return find_player(player_name)[:points]

	# user select

end

def shoe_size(player_name)
	return find_player(player_name)[:shoe]
end

def find_player(player_name)
	all_players.find do |player|
		player[:player_name] == player_name
	end
end

def all_players
	home_players = game_hash[:home][:players]
	away_players = game_hash[:away][:players]

	home_players + away_players
end



