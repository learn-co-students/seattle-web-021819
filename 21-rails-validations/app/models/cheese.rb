class Cheese < ApplicationRecord

  validates :name, presence: true
  validates :cheese_type, presence: true
  validates :stinkiness, {numericality: {only_integer: true, greater_than: 0, less_than: 11}}

end
