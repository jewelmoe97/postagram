class CommentSerializer < ActiveModel::Serializer
  attributes :id, :text, :user_id, :post_id, :user, :post
  has_one :post
has_one :user
end
