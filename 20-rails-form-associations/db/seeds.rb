burgs = [
  {
    name: 'Impossible Burger',
    price: 17.50,
    meat: false,
    restaurant: Restaurant.find_or_create_by(name: 'Veggie Grill')
  },{
    name: 'Portobello Burger',
    price: 12.23,
    meat: false,
    restaurant: Restaurant.find_or_create_by(name: 'Veggie Grill')
  },{
    name: 'Shake Shack Burger',
    price: 10.74,
    meat: true,
    restaurant: Restaurant.find_or_create_by(name: 'Shake Shack')
  },{
    name: 'Shake Shack Veggie Burger',
    price: 10.74,
    meat: false,
    restaurant: Restaurant.find_or_create_by(name: 'Shake Shack')
  },{
    name: 'WhattaBurger',
    price: 10.74,
    meat: false,
    restaurant: Restaurant.find_or_create_by(name: 'Whattaburger')
  }
]


Burger.create(burgs)
