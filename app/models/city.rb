class City < ActiveRecord::Base
	validates :state_id, :name, presence: true

	belongs_to :state,
	primary_key: :id,
	foreign_key: :state_id,
	class_name: 'State'
    
    def self.getCity(name, stateId)
    	city = City.find_by(name: name, state_id: stateId)
    	return city if city
    	nil
    end
	
end
