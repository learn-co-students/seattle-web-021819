class User < ApplicationRecord
  validates :username, {presence: true, uniqueness: true}

  has_secure_password

  # def password=(password)
  #   self.password_digest = Digest::SHA256.base64digest(password)
  #   # checking password against password confirmation
  #   self.save
  # end
  #
  # def authenticate(password)
  #   encrypted_password = Digest::SHA256.base64digest(password)
  #   encrypted_password == self.password_digest
  # end

end
