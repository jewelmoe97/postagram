class User < ApplicationRecord
    has_secure_password
     has_many :comments
  

  
  has_many :posts
   has_many :commented_posts, through: :comments, source: :post
   has_many :likes, dependent: :destroy
   has_many :liked_posts, through: :likes, source: :post

   
    validates :username, presence: true
    
    validates :username,  uniqueness: true
end
