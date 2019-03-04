REDDIT_URL = "http://reddit.com/.json"
STAR_WARS_API = "https://swapi.co/api/"

class CLI
    def self.run
        puts "Running CLI..."

        is_running = true
        while is_running
            self.main_menu
            choice = STDIN.gets.chomp
            # exit
            if choice == "0"
                is_running = false
            # echo what the user types
            elsif choice == "1"
                self.echo
            elsif choice == "2" || choice == "reddit"
                self.reddit
            elsif choice == "3" || choice == "star wars"
                self.star_wars
            else
                puts "Invalid choice."
            end
        end
    end

    def self.main_menu
        puts "What would you like to do?"
        puts "0. exit"
        puts "1. echo"
        puts "2. reddit"
        puts "3. star wars"
    end
    
    def self.echo
        puts "echo:"
        input = STDIN.gets.chomp
        puts "ECHO!: #{input}"
    end
    
    def self.reddit
        puts "Today's top headlines:"

        # made a network request
        # converted the string response into JSON
        # accessed the data we care about by look
        # at the shape of the data in our browser
        json = get_json(REDDIT_URL)
        posts = json["data"]["children"]

        # access the real data for each post
        posts = posts.map do |post|
            # incorrect access to .data
            # must use ["data"]
            post["data"]
        end

        # print out all the titles
        posts.each_with_index do |post, i|
            title = post["title"]
            puts "#{i}. #{title}"
        end
    end

    def self.star_wars
        # enter a number to look up a characters
        # this is not a search API so users are really just
        # entering random numbers to lookup characters. 
        # "1" seems to be the first. Entering 0 or negative
        # numbers will probably break this application.
        puts "Enter an id to lookup:"
        id = STDIN.gets.chomp

        # perform network request
        url = STAR_WARS_API + "/people/#{id}"
        json = url

        # print out the characters name
        name = json["name"]
        puts "Character: #{name}"

        # prompt the user to see if we want to look up
        # the characters homeworld
        puts "Would you like to see their homeworld? (yes/no)"

        # if the user says yes! then print the name of the homeworld
        choice = STDIN.gets.chomp
        if choice.start_with? "y" || choice == "yes"
            json = self.get_json(json["homeworld"])
            name = json["name"]
            puts "Homeworld: #{name}"
            puts
        end
    end

    def self.get_json(url)
        response = RestClient.get(url)
        json = JSON.parse(response.body)
    end
end