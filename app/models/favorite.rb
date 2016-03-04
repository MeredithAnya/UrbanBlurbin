class Favorite < ActiveRecord::Base

	validates :user_id, :city_id, presence: true

	belongs_to :user,
	primary_key: :id,
	foreign_key: :user_id,
	class_name: 'User'

	belongs_to :city,
	primary_key: :id,
	foreign_key: :city_id,
	class_name: 'City'

    
    
end
