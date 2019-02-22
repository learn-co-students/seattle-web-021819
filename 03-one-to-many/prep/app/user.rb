class User
    attr_reader :username, :tweets

    def initialize(username)
        @username = username
        @tweets = []
    end
end