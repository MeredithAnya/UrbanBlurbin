
json.extract! @city, :id, :name
    json.avgs do 
      json.extract! @averages, :traffic, :weather, :food, :nightlife, :overall
    end
	json.blurbs do 
	  json.array! @city.blurbs, :traffic, :weather, :food, :nightlife, :blurb
	end 
