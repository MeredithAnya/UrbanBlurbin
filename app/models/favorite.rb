class Favorite < ActiveRecord::Base

	validates :user_id, :city_id, presence: true
    validate :cannot_favorite_city_more_than_once
	belongs_to :user,
	primary_key: :id,
	foreign_key: :user_id,
	class_name: 'User'

	belongs_to :city,
	primary_key: :id,
	foreign_key: :city_id,
	class_name: 'City'

    def cannot_favorite_city_more_than_once
    	cities = self.user.favorite_cities
    	cities.each do |city|
    		if self.city_id == city.id
    			errors.add(:cant_like_twice, "cannot like city twice")
    		end
    	end	
    end
    
    def self.findByCreds(cityId, userId)
    	fav = self.find_by(city_id: cityId, user_id: userId)
    	return fav if fav 
    	nil

    end
end
