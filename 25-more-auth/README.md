## Objectives
- encryption
- Discuss different encryption and hashing schemes
  - use `Digest::SHA256.base64digest`
    - deterministic: same input => same output
- introduce `bcrypt`
  - `has_secure_password` macro
- Augment a user model in rails using `bcrypt`

## Rules of Auth
- you don't store passwords as plain text
- password hashing is one-way encryption (we never decrypt it)

## Steps to Authentication



## Resources
- [Digest](https://ruby-doc.org/stdlib-2.2.1/libdoc/digest/rdoc/Digest.html)
- [BCrypt](https://github.com/codahale/bcrypt-ruby)
