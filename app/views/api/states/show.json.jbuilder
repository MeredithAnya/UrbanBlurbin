
json.extract! @state, :id, :name
	json.cities do 
	  json.array! @state.cities, :name, :id
	end 
  
	json.topCityOne do 
	  json.extract! @top_city_one, :id, :name 
      json.overall @averages_one 
  end    

  json.topCityTwo do 
	  json.extract! @top_city_two, :id, :name 
      json.overall @averages_two
  end    
 

  json.topCityThree do 
	  json.extract! @top_city_three, :id, :name
      json.overall @averages_three
    
  end   




