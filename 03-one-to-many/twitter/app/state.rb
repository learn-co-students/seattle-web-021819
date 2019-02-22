class State
    attr_accessor :name
    @@all = []
    def initialize(name)
        @name = name
        @@all << self
    end

    def self.all
        @@all
    end

    def cities
        City.all.select do |city|
            city.state == self
        end
    end
end
