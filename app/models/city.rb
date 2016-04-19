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
        return {} if self.blurbs.length == 0
        total_blurbs = self.blurbs.count.to_f
        
    	traffics = self.blurbs.group(:traffic).count
        traffic_sum = 0
    	traffics.each {|key, value| traffic_sum += key * value}
        traffic_avg = (traffic_sum/total_blurbs)

    	weathers = self.blurbs.group(:weather).count
        weather_sum = 0
        weathers.each {|key, value| weather_sum += key * value}
    	weather_avg = (weather_sum/total_blurbs)

    	foods = self.blurbs.group(:food).count
        food_sum = 0
        foods.each {|key, value| food_sum += key * value}
    	food_avg = (food_sum/total_blurbs)

    	nightlifes = self.blurbs.group(:nightlife).count
        nightlife_sum = 0
        nightlifes.each {|key, value| nightlife_sum += key * value}
    	nightlife_avg = (nightlife_sum/total_blurbs)

        overall = ((traffic_avg + weather_avg + food_avg + nightlife_avg) / 4).round(2)
        
        return {traffic: traffic_avg.round(2), weather: weather_avg.round(2), food: food_avg.round(2), nightlife: nightlife_avg.round(2), overall: overall}

    end
    

    
	
end
