class Author < ActiveRecord::Base
  has_many :books

  # def author=(author)
  #   @author = author
  # end
  #
  # def author_id(author_id)
  #   @author_id = author_id
  # end
end
