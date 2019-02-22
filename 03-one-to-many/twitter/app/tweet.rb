class Tweet
    attr_accessor :user
    attr_reader :content
    @@all = []
    def initialize(user, content)
        @user = user
        @content = content
        @@all << self
    end

    def self.all
        @@all
    end
end