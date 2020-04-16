class Album < ApplicationRecord
  belongs_to :category
  belongs_to :artist
  has_many :songs

  validades :title, presence: true
  validades :date, presence:true

  has_one_attached :cover
end
