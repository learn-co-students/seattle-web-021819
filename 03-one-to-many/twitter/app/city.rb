class City
    attr_accessor :name, :state
    @@all = []
    def initialize(name, state)
        @name = name
        @state = state
        @@all << self
    end

    def self.all
        @@all
    end

    def to_s
        "#{@name}, #{state.name}"
    end
end