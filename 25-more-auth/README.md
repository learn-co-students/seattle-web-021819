## Objectives
- encryption
  - secret code,
  - use a cipher to decrypt
- Discuss different encryption and hashing schemes
  - use `Digest::SHA256.base64digest`
  - deterministic => same input leads to same output
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`

## Rules of Auth
- you don't store passwords as plain text
- password hashing is one-way encryption (we never decrypt it)

## Steps to Authentication
- install gem
- add `has_secure_password` macro to user model
- add password_digest column to user model
- signin
  - add a password field to signin form
  - `user.authenticate` in session create
- signup
  - add a password and password confirmation field to the new user form
  - add password and password confirmation to strong params




## Resources
- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
