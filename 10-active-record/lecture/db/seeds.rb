Owner.destroy_all
Pet.destroy_all

john = Owner.create(name: "Jon Arbuckle", age: 48)
odie = Pet.create(
    name: "Odie", age: 8,
    breed: "Dog", species: "Dog",
    owner_id: john.id
)

garfield = Pet.create(
    name: "Garfield", age: 52, species: "cat",
    breed: "orange", owner_id: john.id
)