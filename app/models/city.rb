class City < ActiveRecord::Base
	validates :state_id, :name, presence: true

	belongs_to :state,
	primary_key: :id,
	foreign_key: :state_id,
	class_name: 'State'

	
end
