class User < ApplicationRecord

    has_many :todos

    validates :username, presence: true, uniqueness: true
    
    has_secure_password # comes from BCrypt
  end
