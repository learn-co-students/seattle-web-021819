# {
#     player_name: "Alan Anderson",
#     number: 0,
#     shoe: 16,
#     points: 22,
#     rebounds: 12,
#     assists: 12,
#     steals: 3,
#     blocks: 1,
#     slam_dunks: 1
# }, {
# alan_anderson = Player.new("Alan Anderson", 0, 16, 22, 12, 12, 3, 1, 1)    

class Player
    attr_accessor :player_name, :number
    attr_reader :shoe, :points, :rebounds,
        :assists, :steals, :blocks, :slam_dunks

    def initialize(name, number, shoe, points, rebounds,
            assists, steals, blocks, slam_dunks)
        @player_name = name
        @number = number
        @shoe = shoe
        @points = points
        @rebounds = rebounds
        @assists = assists
        @steals = steals
        @blocks = blocks
        @slam_dunks = slam_dunks
    end

    def brag
        "I'm #{@player_name} and I've dunked #{@slam_dunks} times"
    end
end