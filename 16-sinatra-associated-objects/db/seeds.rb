Book.destroy_all

Adapter::GoogleBooks.new('N.K. Jemisin').fetch_books
Adapter::GoogleBooks.new("Stephen King").fetch_books
Adapter::GoogleBooks.new("Roberto Bolano").fetch_books

# author = Author.create(name: 'N.K. Jemisin')
#
# Book.all.each {|b| b.update(author_id: 1)}