# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Shelter_Location.destroy_all
Need.destroy_all

user1 = User.create(name: "alan", email: "alan@example.com", password: "0000")

shelter_location1 = ShelterLocation.create(name: 'test', address: '708 Main St, Houston TX, 77002', user_id: 1)

Need.create(shelter_location_id: 1)
