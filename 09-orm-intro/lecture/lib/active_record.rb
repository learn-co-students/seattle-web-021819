class MyActiveRecord
    def self.table_name
        nil
    end

    def self.all
        puts "table name: #{self.table_name} inside #{self.name}"
        sql = "SELECT * FROM #{self.table_name}"
        results = DB[:conn].execute(sql)
    end
end