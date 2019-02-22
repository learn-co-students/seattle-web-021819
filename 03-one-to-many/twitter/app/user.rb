class User
    attr_reader :username
    @@all = []
    def initialize(username)
        @username = username
        @@all << self 
    end

    def add_tweet(content)
        Tweet.new(self, content)
        #@tweets << tweet 
    end

    # iterate through all the tweets and select only
    # the ones that say they belong to user themself
    def tweets
        Tweet.all.select do |tweet|
            tweet.user == self
        end
    end
end