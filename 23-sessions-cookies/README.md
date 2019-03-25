# Learning Goals
- What are cookies and how do they work?
  - NY Times
  - Edit This Cookie
- cookies are key/value pairs of data
  - sent over with request headers (metadata)
  - used to store/track user data
- What does it mean that HTTP is stateless?
  - every request is an island, self-contained
  - not designed to hold user information
  - cookie is a reminder of who we are to a server
    - so our urls don't have to hold that data about us
- How can we use cookies in a Rails app?
  - cookies is a method
    - treat it like a hash
- What kind of data can / should you store in a cookie?
  - data about user prefences
  - nonsecure data
- How can (should) we use sessions in a Rails app?
  - encrypted cookie
  - still in key value pairs
  - still being passed in the header
  - still a cookie
- How can we use flash in a Rails app?
  - if we want to send messages across redirects and request responses

## External Resources:
- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
