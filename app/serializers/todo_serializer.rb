class TodoSerializer < ActiveModel::Serializer
    attributes :id, :date, :title
    has_one :user
  end