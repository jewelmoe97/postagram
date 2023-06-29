class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url

  has_many :posts
   has_many :comments
  #  has_many :likes
  
   has_many :posts, through: :comments
   has_many :liked_posts, through: :likes, source: :post
end

