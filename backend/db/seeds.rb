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

user1 = User.create(name: "Alan", email: "alan@example.com", password: "0000")
user2 = User.create(name: "Sheba", email: "sheba@example.com", password: "0000")
user3 = User.create(name: "Janu", email: "janu@example.com", password: "0000")
user4 = User.create(name: "Hannah", email: "hannah@example.com", password: "0000")
user5 = User.create(name: "brabra", email: "brabra@example.com", password: "0000")
user6 = User.create(name: "Meg", email: "meg@example.com", password: "0000")
user7 = User.create(name: "Joe", email: "joe@example.com", password: "0000")
user8 = User.create(name: "Jordan", email: "jordan@example.com", password: "0000")
user9 = User.create(name: "Eddie", email: "eddie@example.com", password: "0000")
user10 = User.create(name: "Josh", email: "josh@example.com", password: "0000")



shelter1 = Shelter.create(name: 'Flatiron Shelter', address: '708 Main St, Houston TX, 77002', phone: '000-000-0000', image_url: 'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/999/s200/flatironschool.png', user_id: user1.id)
shelter2 = Shelter.create(name: 'Alan Shelter', address: '1625 Main St, Houston, TX, 77002', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user2.id)
shelter3 = Shelter.create(name: 'Harmony House Inc', address: '602 Girard St, Houston, TX 77007', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user3.id)
shelter4 = Shelter.create(name: 'United States Veterans Initiative', address: '1418 Preston St # 2, Houston, TX 77002', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user4.id)
shelter5 = Shelter.create(name: 'Turning Point Center', address: '1701 Jacquelyn Dr, Houston, TX 77055', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user5.id)
shelter6 = Shelter.create(name: 'Red Shield Lodge', address: '501-599 Morris St, Houston, TX 77009', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user1.id)
shelter7 = Shelter.create(name: 'Star of Hope', address: 'Doris and Carlos Morris Men’s Development Center, 1811 Ruiz St, Houston, TX 77002', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user3.id)
shelter8 = Shelter.create(name: 'Spirit Key Inc.', address: '13617 Kaltenbrun Rd, Houston, TX 77086', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user5.id)
shelter9 = Shelter.create(name: 'Madge Bush Transitional', address: '3410 Drew St, Houston, TX 77004', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user7.id)
shelter10 = Shelter.create(name: 'United States Veterans Initiative', address: '1418 Preston St # 2, Houston, TX 77002', phone: '000-000-0000', image_url: 'https://files.slack.com/files-pri/T02MD9XTF-FFDGY6XLY/alan_stars.png', user_id: user8.id)



need1 = Need.create(title: "Blanket", image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i9s0wUuyL._SL1500_.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', shelter_id: shelter1.id)
need2 = Need.create(title: "Canned Food", image_url: 'https://i5.walmartimages.com/asr/5f94a53f-7c20-49d6-ad0f-25492a5ad258_1.af808da77f19dad36484d163b886128e.jpeg', description: "(3 Pack) Chef Boyardee Beef Ravioli, 15 oz, 4 Pack", details: 'Available everywhere', shelter_id: shelter2.id)
need3 = Need.create(title: "Canned Food", image_url: 'https://www.mountainhouse.com/mm5/graphics/00000001/products/30111_Chicken_a_la_King.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', shelter_id: shelter3.id)
need4 = Need.create(title: "Bottled Water", image_url: 'http://oasisanimalsanctuary.info/wp-content/uploads/2018/10/publix-purified-water-pure-life-ar-pure-purified-water-fl-oz-publix-purified-water-price-does-publix-purified-water-have-chlorine.jpg', description: "Nestlé® Pure Life® Purified Water 32-16.9 fl. oz. Bottles", details: 'Available everywhere', shelter_id: shelter4.id)
need5 = Need.create(title: "Blanket", image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i9s0wUuyL._SL1500_.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', shelter_id: shelter5.id)
need6 = Need.create(title: "Canned Food", image_url: 'https://www.mountainhouse.com/mm5/graphics/00000001/products/30111_Chicken_a_la_King.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', shelter_id: shelter6.id)
need7 = Need.create(title: "Canned Food", image_url: 'https://i5.walmartimages.com/asr/5f94a53f-7c20-49d6-ad0f-25492a5ad258_1.af808da77f19dad36484d163b886128e.jpeg', description: "(3 Pack) Chef Boyardee Beef Ravioli, 15 oz, 4 Pack", details: 'Available everywhere', shelter_id: shelter7.id)
need8 = Need.create(title: "Bottled Water", image_url: 'http://oasisanimalsanctuary.info/wp-content/uploads/2018/10/publix-purified-water-pure-life-ar-pure-purified-water-fl-oz-publix-purified-water-price-does-publix-purified-water-have-chlorine.jpg', description: "Nestlé® Pure Life® Purified Water 32-16.9 fl. oz. Bottles", details: 'Available everywhere', shelter_id: shelter8.id)
