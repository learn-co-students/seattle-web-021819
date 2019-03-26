# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Cohort.create([
  {
    name: 'Seattle.first',
    start_date: DateTime.new(2019, 01, 28)
  }, {
    name: 'CRUD',
    start_date: DateTime.new(2019, 02, 18)
  }, {
    name: 'Seattle Web 031119',
    start_date: DateTime.new(2019, 03, 11)
  }
])

20.times do
  Student.create(name: Faker::FunnyName.name, email: Faker::Internet.email, cohort_id: [1,2,3].sample)
end