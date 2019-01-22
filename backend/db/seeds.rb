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




s1 = Shelter.create(name: 'Spirit Key Transitional Housing Cypress', address: '13617 Kaltenbrun Rd
Houston, TX 77086', phone: '(281) 971-0014', image_url: 'https://www.shelterlistings.org/images/shelters/35971_1364357023.jpg', user_id: user1.id)

s2 = Shelter.create(name: 'Aable Starting Point', description: 'Affordable temporary housing for women and men at separate locations. ', address: '602 Girard St, Houston, TX 77007', phone: '(713) 575-5033', image_url: 'https://www.shelterlistings.org/images/shelters/37297_aable1.jpg', user_id: user2.id)

s3 = Shelter.create(name: 'Star Of Hope Mission - Women And Family Emergency Shelter', description: 'Women emergency shelter, family emergency shelter, medical clinic, nursery and pre-school area.', address: '419 Dowling, Houston, TX 77003', phone: '(713) 222-2220', image_url: 'https://www.shelterlistings.org/images/shelters/19784_StarofHopeMission3.jpg', user_id: user3.id)

s4 = Shelter.create(name: 'Brigids Hope at The Beacon', description: 'Provides a transitional living program with a support system for women, incarcerated and released or on parole', address: '1117 Texas Ave, Houston, TX 77002', phone: '(713) 222-9737', image_url: 'https://www.shelterlistings.org/images/shelters/25125_thebeacon.jpg', user_id: user4.id)

s5 = Shelter.create(name: 'New Hope Housing, Inc.', description: 'Section 8 permanent housing, affordable housing for veterans, elderly, students, minor disabilites, individuals overcoming sustance abuse, working poor and formerly homeless ', address: '1414 Congress
Houston, TX 77002', phone: '(713) 224-1414', image_url: 'https://www.shelterlistings.org/images/shelters/37828_x_logo.png', user_id: user5.id)

s6 = Shelter.create(name: 'Star of Hope Mission', description: 'Homeless Shelter, transitional housing, volunteer opportunities ', address: '1811 Ruiz St, Houston, TX 77002', phone: '(713)-227-8900', image_url: 'https://www.shelterlistings.org/images/shelters/19781_StarofHopeMission.jpg', user_id: user1.id)

s7 = Shelter.create(name: 'Covenant House Texas', description: '30-day Maximum for Emergency Shelter, 12 month max. for transitional homeless youth up to age 21 with no history of fire-setting or sexual offenses ', address: '1111 Lovett Blvd, Houston, TX 77006', phone: '(713) 523-2231', image_url: 'https://www.shelterlistings.org/images/shelters/20199_convenant.jpg', user_id: user2.id)

s8 = Shelter.create(name: 'Madge Bush Transitional', description: 'Apartment complex for homeless single women with 1-2 children in their custody.', address: '3410 Drew Street, Houston, TX 77004', phone: '(713) 652-3830', image_url: 'https://tpc.googlesyndication.com/daca_images/simgad/5053207377208705477', user_id: user3.id)

s9 = Shelter.create(name: 'Santa Maria Hostel, Inc.', description: 'Treatment Center, supportive housing, halfway house, women with children, female veteran housing, court liaison service, recovery support service', address: '2605 Parker Road, Houston, TX 77009', phone: '(713) 691-0900', image_url: 'https://www.shelterlistings.org/images/shelters/22694_santamaria.jpg', user_id: user4.id)

s10 = Shelter.create(name: 'Lord of the Streets Episcopal Church', description: 'Non Profit Organization that provides day shelter, drop in shelter, crisis management, medical and dental assistance', address: '3401 Fannin St
Houston, TX 77004', phone: '(713) 526-0311', image_url: 'https://www.shelterlistings.org/images/shelters/25123_lordofthestreet.jpg', user_id: user5.id)

s11 = Shelter.create(name: 'The Life Center for the Homeless', description: 'A place that provides shelter, food, clothing, spiritual guidance and many more for people in need', address: '4516 Old Yale St.
Houston, TX 77018', phone: '(832) 292-3295', image_url: 'https://www.shelterlistings.org/images/shelters/37771_5.JPG', user_id: user1.id)

s12 = Shelter.create(name: 'Project Hope Recovery Center', description: 'Our purpose is to provide men and women with an effective and comprehensive Christian faith-based solution to life-controlling problems.', address: '7805 Kimble St, Houston, TX 77017', phone: '(877) 491-3816', image_url: 'https://i.vimeocdn.com/video/580518905_780x439.jpg', user_id: user2.id)

s13 = Shelter.create(name: 'Veterans Progress & Recovery Services', description: 'Transitional housing for veterans.', address: '7622 Boggess Rd, Houston, TX 77016', phone: '(832) 253-7405', image_url: 'http://militarybenefits.info/wp-content/uploads/2018/01/american-flag-750x483.jpg', user_id: user3.id)

s14 = Shelter.create(name: 'The Oasis of Houston', description: 'Affordable housing for veterans', address: '4607 Cashel Castle Dr., Houston, TX 77069', phone: '(281) 919-6144', image_url: 'https://pbs.twimg.com/profile_images/649681038164103168/RR8q2RV4.jpg', user_id: user4.id)

s15 = Shelter.create(name: 'The Salvation Army Of Houston for Women', description: 'Transitional housing for single women who have completed an alcohol/drug detoxification program.', address: '4607 Cashel Castle Dr., Houston, TX 77069', phone: '(713) 223-8889', image_url: 'http://salvationarmyhouston.org/wp-content/uploads/sites/5/2016/07/SAWA-red-logo.png', user_id: user5.id)




need1 = Need.create(title: "Blanket", image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i9s0wUuyL._SL1500_.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', quantity_needed: 40, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"
target="_blank', shelter_id: s1.id)

need2 = Need.create(title: "Canned Food", image_url: 'https://i5.walmartimages.com/asr/5f94a53f-7c20-49d6-ad0f-25492a5ad258_1.af808da77f19dad36484d163b886128e.jpeg', description: "(3 Pack) Chef Boyardee Beef Ravioli, 15 oz, 4 Pack", details: 'Available everywhere', quantity_needed: 30, quantity_bought: 0, shopping_url: 'https://www.walmart.com/ip/3-Pack-Chef-Boyardee-Beef-Ravioli-15-oz-4-Pack/153932619https://www.walmart.com/ip/3-Pack-Chef-Boyardee-Beef-Ravioli-15-oz-4-Pack/153932619', shelter_id: s1.id)

need3 = Need.create(title: "Canned Food", image_url: 'https://www.mountainhouse.com/mm5/graphics/00000001/products/30111_Chicken_a_la_King.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', quantity_needed: 15, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"target="_blank', shelter_id: s1.id)

need4 = Need.create(title: "Bottled Water", image_url: 'http://oasisanimalsanctuary.info/wp-content/uploads/2018/10/publix-purified-water-pure-life-ar-pure-purified-water-fl-oz-publix-purified-water-price-does-publix-purified-water-have-chlorine.jpg', description: "Nestlé® Pure Life® Purified Water 32-16.9 fl. oz. Bottles", details: 'Available everywhere', quantity_needed: 50, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"
target="_blank', shelter_id: s2.id)

need5 = Need.create(title: "Blanket", image_url: 'https://images-na.ssl-images-amazon.com/images/I/91i9s0wUuyL._SL1500_.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', quantity_needed: 25, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"
target="_blank', shelter_id: s2.id)

need6 = Need.create(title: "Canned Food", image_url: 'https://www.mountainhouse.com/mm5/graphics/00000001/products/30111_Chicken_a_la_King.jpg', description: "Pinzon Faux Fur Throw Blanket 63in x 87in, Frost Grey", details: 'Available everywhere', quantity_needed: 20, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"target="_blank', shelter_id: s3.id)

need7 = Need.create(title: "Canned Food", image_url: 'https://i5.walmartimages.com/asr/5f94a53f-7c20-49d6-ad0f-25492a5ad258_1.af808da77f19dad36484d163b886128e.jpeg', description: "(3 Pack) Chef Boyardee Beef Ravioli, 15 oz, 4 Pack", details: 'Available everywhere', quantity_needed: 13, quantity_bought: 0, shopping_url: 'https://www.walmart.com/ip/3-Pack-Chef-Boyardee-Beef-Ravioli-15-oz-4-Pack/153932619', shelter_id: s3.id)

need8 = Need.create(title: "Bottled Water", image_url: 'http://oasisanimalsanctuary.info/wp-content/uploads/2018/10/publix-purified-water-pure-life-ar-pure-purified-water-fl-oz-publix-purified-water-price-does-publix-purified-water-have-chlorine.jpg', description: "Nestlé® Pure Life® Purified Water 32-16.9 fl. oz. Bottles", details: 'Available everywhere', quantity_needed: 50, quantity_bought: 0, shopping_url: 'https://www.amazon.com/Pinzon-Faux-Throw-Blanket-Frost/dp/B01J2N7F8U/?_encoding=UTF8&camp=1789&creative=9325&linkCode=ur2&tag=storypodca-20&linkId=2P4S6EY6B462X4AR"target="_blank', shelter_id: s4.id)
