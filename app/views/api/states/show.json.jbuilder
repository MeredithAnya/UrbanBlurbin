
json.extract! @state, :name
	json.cities do 
	  json.array! @state.cities, :name
	end 


