class Post < ApplicationRecord
     has_many :comments
    
    
   belongs_to :user
      has_many :commented_users, through: :comments, source: :user
   
      has_many :likes
  has_many :liking_users, through: :likes, source: :user
   
    
    validates :caption, length: { minimum: 3}, presence: true
    validates :image, presence: true

end
