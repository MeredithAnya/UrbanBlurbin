class City < ActiveRecord::Base
	validates :state_id, :name, presence: true

	belongs_to :state,
	primary_key: :id,
	foreign_key: :state_id,
	class_name: 'State'

	has_many :blurbs,
	primary_key: :id,
	foreign_key: :city_id,
	class_name: 'Blurb'

	
    
    def self.getCity(name, stateId)
    	city = City.find_by(name: name, state_id: stateId)
    	return city if city
    	nil
    end

    def averages
    	traffics = self.blurbs.group(:traffic).count
    	traffic_avg = (traffics.keys.inject(:+)/traffics.length.to_f)

    	weathers = self.blurbs.group(:weather).count
    	weather_avg = (weathers.keys.inject(:+)/weathers.length.to_f)

    	foods = self.blurbs.group(:food).count
    	food_avg = (foods.keys.inject(:+)/foods.length.to_f)

    	nightlifes = self.blurbs.group(:nightlife).count
    	nightlife_avg = (nightlifes.keys.inject(:+)/nightlifes.length.to_f)

        overall = ((traffic_avg + weather_avg + food_avg + nightlife_avg) / 4).round(2)
        
        return {traffic: traffic_avg.round(1), weather: weather_avg.round(1), food: food_avg.round(1), nightlife: nightlife_avg.round(1), overall: overall}

    end

    
	
end
