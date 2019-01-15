# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
ShelterLocation.destroy_all
Need.destroy_all

user1 = User.create(name: "alan", email: "alan@example.com", password: "0000")
user2 = User.create(name: "bims", email: "bims@example.com", password: "0000")

shelter_location1 = ShelterLocation.create(name: 'first_shelter', address: '708 Main St, Houston TX, 77002', user_id: user1.id)
shelter_location2 = ShelterLocation.create(name: "second_shelter", address: "1625 Main St, Houston, TX, 77002", user_id: user2.id)

Need.create(name_of_needs: "blankets", shelter_location_id: shelter_location1.id)
