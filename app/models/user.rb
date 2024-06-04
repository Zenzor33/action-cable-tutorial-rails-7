require 'bcrypt'

class User < ApplicationRecord
  has_secure_password

  # Associations
  has_many :messages

  # Validations
  validates :username, presence: true, uniqueness: true
end
