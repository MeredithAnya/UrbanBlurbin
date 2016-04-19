class State < ActiveRecord::Base
	validates :name, presence: true

	has_many :cities,
	primary_key: :id,
	foreign_key: :state_id,
	class_name: 'City'

	def top_cities

		top_cities = {}
		self.cities.each do |city|
		     next if city.blurbs.length == 0 
			 top_cities[city] = city.averages[:overall]
		end
		return [] if top_cities.length <= 2
		ordered_top_cities = top_cities.sort_by {|city, overall| overall}
		
		[ordered_top_cities[-1],ordered_top_cities[-2],ordered_top_cities[-3]] 

	end
end
