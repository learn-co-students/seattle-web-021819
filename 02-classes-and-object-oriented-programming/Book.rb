class Book
  attr_accessor :author, :page_count, :genre
  attr_reader :title
  
  @@count = 0
  @@all = []

  def initialize(title)
      @title = title
      @author = "Uknown"
      @page_count = 0
      @pages_read = 0

      @@count += 1
      @@all << self
  end
  
  def turn_page
      @pages_read += 1
      puts "Flipping the page...wow, you read fast!"
      puts "Now: #{@pages_read}"
  end

  def self.all
    @@all
  end

  def self.count
    @@count
  end

  def self.find_books_by_author(name)
    # Array Methods:
    # .each, .map, .filter, .collect, .select
    @@all.select do |book|
      book.author == name
    end
  end

  def to_s
    "#{@title}, by #{@author}"
  end
end