
json.extract! @state, :id, :name
	json.cities do 
	  json.array! @state.cities, :name
	end 
  if @top_city_one
	json.topCityOne do 
	  json.extract! @top_city_one, :id, :name 
	    json.avgs do 
           json.extract! @averages_one, :traffic, :weather, :food, :nightlife, :overall
         end
    end 
    json.topCityTwo do 
	  json.extract! @top_city_two, :id, :name 
	    json.avgs do 
           json.extract! @averages_two, :traffic, :weather, :food, :nightlife, :overall
         end
    end 
    json.topCityThree do 
	  json.extract! @top_city_three, :id, :name 
	    json.avgs do 
           json.extract! @averages_three, :traffic, :weather, :food, :nightlife, :overall
         end
         
         
    end  
  end   




