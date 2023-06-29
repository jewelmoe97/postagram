class LikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :post_id, :user, :post
  has_one :post
has_one :user
end
