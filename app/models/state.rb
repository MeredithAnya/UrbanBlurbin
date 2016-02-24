class State < ActiveRecord::Base
	validates :name, presence: true

	has_many :cities,
	primary_key: :id,
	foreign_key: :state_id,
	class_name: 'City'
end
