require 'pry'
require 'sqlite3'

DB = {
    conn: SQLite3::Database.new('db/states.db')
}
# optionally configure the DB to return
# results as a hash as opposed to an array

require_relative('../lib/active_record')
require_relative('../lib/city')
require_relative('../lib/state')