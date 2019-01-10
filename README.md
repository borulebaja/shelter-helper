# final-project

A Homeless Shelter App in the Houston, that allows users to help the homeless by donation, not only in monetary terms, but also basic neccessity of life, such as personal care items and so on.

# Frameworks

- React in Redux (frontend)
- Rails (backend)

# User Stories

- User can signup and login as a guest or admin
- User can track shelters they have donated to
- User can click on location to view the info of a particular shelter
- User can donate to many shelter location
- Admin can add new shelter locations
- Admin can post shelter needs

# Relationships

- A many to many relationship
- User has many shelter locations
- Shelter location belong to user
- Shelter location has many needs
- Needs belong to shelter location

  User ----< Shelter Location >---- Need

# API

- Google maps api to display locations on the map

# Stretch Goals

- Make a mobile version of the app using React Native
- Search shelter by zipcode
- Cart/Checkout feature
- Selected needs will be linked to paypal account for transactions (paypal api)
- Include a Donation model that redirects to billing/payment
