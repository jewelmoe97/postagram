class PostSerializer < ActiveModel::Serializer
  
  attributes :id, :caption, :image, :user_id, :user, :comments ,:likes

  belongs_to :user
   has_many :comments
   has_many :likes
end
