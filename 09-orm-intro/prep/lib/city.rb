class City
    attr_reader :id, :name, :population, :state_id

    def initialize(id: nil, name:, population:, state_id:)
        @id = id    
        @name = name
        @population = population
        @state_id = state_id
    end

    def self.create_table
    end

    def self.drop_table
    end

    def self.all
        sql = "SELECT * FROM cities"
        results = DB[:conn].execute(sql)

        results.map do |row|
            self.new_from_db(row)
        end
    end

    def self.create
    end

    def self.new_from_db(row)
        id = row[0]
        name = row[1]
        population = row[2]
        state_id = row[3]
        City.new({id: id, name: name, population: population, state_id: state_id})
    end

    def self.find_by_name
    end

    def update
    end
end