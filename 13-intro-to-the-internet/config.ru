# To use Rack, provide an "app": an object that responds to the call method, taking the environment hash as a parameter, and returning an Array with three elements:
#
# The HTTP response code
# A Hash of headers
# The response body, which must respond to each
require 'rack'
require 'shotgun'
require 'pry'

class App

  LOCATIONS = ['Seattle', 'London', 'Manhattan', "Brooklyn", 'Denver']

  def call(environment_hash)
    req = Rack::Request.new(environment_hash)
    path = req.path
    location = path.sub('/', '').capitalize
    resp = Rack::Response.new
    if path == '/'
      resp.write('Welcome to Flatiron')
    elsif LOCATIONS.include?(location)
      resp.write("<h1>Welcome to Flatiron #{location} Campus</h1>")
    else
      resp.write("Flatiron is expanding to #{location} soon!")
    end
    resp.finish
    # ['200', {'Content-Type' => 'text/html'}, ['Niky wuz not here']]
  end
end

run App.new

# module Rack
#   class Request
#
#
#   end
# end
# Rack::Request
