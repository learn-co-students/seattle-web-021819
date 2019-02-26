class Bakery
    def initialize
        
    end

    def average_calories
        total = 0
        self.deserts.each do |desert|
            desert.ingredients.each do |ingredient|
                total += ingredient.calories
            end
        end
        total / self.deserts.count.to_f
end

class Desert
    def initialize(bakery)
        @bakery = bakery
    end
end

class Ingredient
    def initialize(desert)
       @desert = desert
    end
end

class DesertIngredient
    def initialize(desert, ingredient)
       @desert = desert
       @ingredient = ingredient
    end
end

bakery = Bakery.new
cookie = Desert.new(bakery)
cake = Desert.new(bakery)
flour1 = Ingredient.new(cookie)
flour2 = Ingredient.new(cake)
