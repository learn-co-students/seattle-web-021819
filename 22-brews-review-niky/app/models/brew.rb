class Brew < ApplicationRecord
  # validates :blend_name, presence: true
  # validates :origin, presence: true
  # validates :notes, presence: true
  has_many :purchases
  
  validates :blend_name, :origin, :notes, :presence => true
  validates :strength, numericality: {greater_than_or_equal_to: 1, less_than_or_equal_to: 5}


end
