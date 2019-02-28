class City < MyActiveRecord
    attr_reader :id, :name, :population, :state_id

    def initialize(id: nil, name:, population:, state_id:)
        @id = id
        @name = name
        @population = population
        @state_id = state_id
    end

    def self.table_name
        "cities"
    end

    def self.create_table
    end

    def self.create(name:, population:, state_id:)
        city = City.new(name: name, population: population, state_id: state_id)
        city.save
        city
    end

    # accepts one row of DB data and creates an instance
    # assume row is formatted [id, name, pop, state_id]
    def self.new_from_db(row)
        City.new(id: row[0], name: row[1], population: row[2], state_id: row[3])
    end

    def self.find_by_name(name)
        sql = <<~SQL
            SELECT * FROM #{table_name}
            WHERE name = ?
        SQL

        results = DB[:conn].execute(sql, name)
        if results.empty? 
            return nil
        else
            return self.new_from_db(results.first)
        end
    end

    # prevent creating duplicates in our database by searching for
    # a thing to create before we create it again.
    def self.find_or_create_by(name:, population:, state_id:)
        city = self.find_by_name(name)
        if city == nil
            city = City.create(name: name, population: population, state_id: state_id)
        end
        city
    end

    def save
        city = City.find_by_name(@name)
        if city != nil
            city.update
        else
            sql = <<~SQL
                INSERT INTO #{City.table_name} (name, population, state_id)
                VALUES (?, ?, ?);
            SQL

            # insert the instance data
            DB[:conn].execute(sql, @name, @population, @state_id)

            # after the insert query DB to find it's id
            sql = <<~SQL
                SELECT last_insert_rowid()
                FROM #{self.class.table_name}
                LIMIT 1;
            SQL
            results = DB[:conn].execute(sql)
            @id = results[0][0]
        end
    end

    def update
            sql = <<~SQL
                UPDATE #{City.table_name}
                SET name = ?, population = ?, state_id = ?
                WHERE id = ?
            SQL

            # insert the instance data
            DB[:conn].execute(sql, @name, @population, @state_id, @id)
    end

    def to_s
        "#{@name} has #{@population} people"
    end
end