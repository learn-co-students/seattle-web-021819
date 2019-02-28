require 'pry'
require 'sqlite3'

require_relative '../lib/city'

DB = {
    conn: SQLite3::Database.new('db/states.db')
}
DB[:conn].results_as_hash = true
