# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Shelter.destroy_all
Need.destroy_all

user1 = User.create(name: "alan", email: "alan@example.com", password: "0000")
user2 = User.create(name: "bims", email: "bims@example.com", password: "0000")

shelter1 = Shelter.create(name: 'flatiron_shelter', address: '708 Main St, Houston TX, 77002', phone: '000-000-0000', image_url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s200/flatironschool.png', user_id: user1.id)
shelter2 = Shelter.create(name: 'alan_shelter', address: '1625 Main St, Houston, TX, 77002', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user2.id)

need1 = Need.create(title: "blankets", image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i9s0wUuyL._SL1500_.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', shelter_id: shelter1.id)
