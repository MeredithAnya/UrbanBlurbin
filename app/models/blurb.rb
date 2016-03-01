class Blurb < ActiveRecord::Base
	validates :city_id, :traffic, :weather, :food, :nightlife, :blurb, presence: true

	belongs_to :city,
	primary_key: :id,
	foreign_key: :city_id,
	class_name: 'City'
end
