# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#USER
User.create!(username: 'meredith', password: 'meredith')
User.create!(username: 'demoUser', password: 'password')

Favorite.create!(user_id: 2, city_id: 52)
Favorite.create!(user_id: 2, city_id: 64)

# ALL STATES




State.create!(name: "Alabama")
State.create!(name: "Alaska")
State.create!(name: "Arizona")
State.create!(name: "Arkansas")
State.create!(name: "California")
State.create!(name: "Colorado")
State.create!(name: "Connecticut")
State.create!(name: "Delaware")
State.create!(name: "Florida")
State.create!(name: "Georgia")
State.create!(name: "Hawaii")
State.create!(name: "Idaho")
State.create!(name: "Illinois")
State.create!(name: "Indiana")
State.create!(name: "Iowa")
State.create!(name: "Kansas")
State.create!(name: "Kentucky")
State.create!(name: "Louisiana")
State.create!(name: "Maine")
State.create!(name: "Maryland")
State.create!(name: "Massachusetts")
State.create!(name: "Michigan")
State.create!(name: "Minnesota")
State.create!(name: "Mississippi")
State.create!(name: "Missouri")
State.create!(name: "Montana")
State.create!(name: "Nebraska")
State.create!(name: "Nevada")
State.create!(name: "New Hampshire")
State.create!(name: "New Jersey")
State.create!(name: "New Mexico")
State.create!(name: "New York")
State.create!(name: "North Carolina")
State.create!(name: "North Dakota")
State.create!(name: "Ohio")
State.create!(name: "Oklahoma")
State.create!(name: "Oregon")
State.create!(name: "Pennsylvania")
State.create!(name: "Rhode Island")
State.create!(name: "South Carolina")
State.create!(name: "South Dakota")
State.create!(name: "Tennessee")
State.create!(name: "Texas")
State.create!(name: "Utah")
State.create!(name: "Vermont")
State.create!(name: "Virginia")
State.create!(name: "Washington")
State.create!(name: "West Virgina")
State.create!(name: "Wisconsin")
State.create!(name: "Wyoming")

#ALABAMA CITIES
City.create!(name: "Birmingham", state_id: 1)
10.times do 
	Blurb.create!(city_id: 1, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Auburn", state_id: 1)

10.times do 
	Blurb.create!(city_id: 2, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Montgomery", state_id: 1)

10.times do 
	Blurb.create!(city_id: 3, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#ALASKA CITIES
City.create!(name: "Anchorage", state_id: 2)

10.times do 
	Blurb.create!(city_id: 4, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Juneau", state_id: 2)

10.times do 
	Blurb.create!(city_id: 5, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#ARIZONA CITIES
City.create!(name: "Phoenix", state_id: 3)

10.times do 
	Blurb.create!(city_id: 6, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Scottsdale", state_id: 3)

 10.times do 
	Blurb.create!(city_id: 7, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Tempe", state_id: 3)

10.times do 
	Blurb.create!(city_id: 8, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Tuscon", state_id: 3)

10.times do 
	Blurb.create!(city_id: 9, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#ARKANAS CITIES
City.create!(name: "Little Rock", state_id: 4)

10.times do 
	Blurb.create!(city_id: 10, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Hot Springs", state_id: 4)

10.times do 
	Blurb.create!(city_id: 11, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#CALIFORNIA CITES
City.create!(name: 'Alameda' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 12, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Albany' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 13, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Alhambra' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 14, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Anaheim' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 15, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Belmont' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 16, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Berkeley' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 17, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Beverly Hills' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 18, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Big Sur' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 19, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Burbank' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 20, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: 'Concord' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 21, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Costa Mesa' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 22, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Culver City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 23, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Cupertino' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 24, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Daly City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 25, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Davis' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 26, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Dublin' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 27, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Emeryville' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 28, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Foster City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 29, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Fremont' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 30, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Glendale' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 31, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Hayward' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 32, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Healdsburg' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 33, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Huntington Beach' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 34, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Irvine' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 35, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'La Jolla' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 36, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Livermore' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 37, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Long Beach' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 38, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Los Altos' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 39, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Los Angeles' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 40, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Los Gatos' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 41, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Marina del Rey' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 42, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Menlo Park' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 43, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Mill Valley' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 44, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Millbrae' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 45, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Milpitas' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 46, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Monterey' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 47, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Mountain View' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 48, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Napa' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 49, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Newwark' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 50, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Newport Beach' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 51, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Oakland' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 52, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Orange County' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 53, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Palo Alto' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 54, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Park La Brea' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 55, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Pasadena' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 56, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Pleasanton' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 57, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Redondo Beach' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 58, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Redwood City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 59, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Sacramento' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 60, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Bruno' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 61, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Carlos' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 62, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Diego' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 63, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end



City.create!(name: 'San Francisco' ,state_id: 5)

blurb_sf1 = "This city! Wow I mean I wake up in the morning and it's crazy because it looks warm outside and then I walk to work (haha funny joke that I would live walking distance to work) but I do walk to Bart and it is freezing! I love it! I guess that's what I get for growing up in Arizona. But for real, this city is the best I have lived in. I only give it a 4 for weather because I prefer it a little more toasty. Oh and traffic sucks. But that's a given."
blurb_sf2 = "I'm an east bay native but I still love the city. The best is that early morning drive over the Bay Bridge when the sun is just rising... BOOTIFUL. I don't get to eat out that much in the city but when I do, yumm! The mission has some amazing food, and amazing bars. The one thing about SF, and maybe this is just how I feels about the entire United States is that the bars close too d*** early. I'm not saying we need to be like Ibiza in the summertime... but I think 2am is a little on the early side. Got to have some love for the night owls in the city! Hoot Hoot"
blurb_sf3 = "Longtime lurker here, I just wanted to say that I feel like sf is getting flooded with hipsters. I mean just look at the other blurbs! It feels like they have invented a new language that only the hippest of hipsters understand. I think we need to have more individuality, you know, be more unique. I drink out of regular glass cups to stand out, I think others should follow suit."
10.times do 
	Blurb.create!(city_id: 64, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

Blurb.create!(city_id: 64, traffic: 2, weather: 4, food: 5, nightlife: 5, blurb: blurb_sf1)
Blurb.create!(city_id: 64, traffic: 2, weather: 5, food: 5, nightlife: 4, blurb: blurb_sf2)
Blurb.create!(city_id: 64, traffic: 3, weather: 5, food: 5, nightlife: 5, blurb: blurb_sf3)





City.create!(name: 'San Jose' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 65, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Leandro' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 66, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Mateo' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 67, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'San Rafael' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 68, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Santa Barbara' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 69, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Santa Clara' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 70, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Santa Cruz' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 71, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Santa Monica' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 72, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Santa Rosa' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 73, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Sausalito' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 74, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Sonoma' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 75, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'South Lake Tahoe' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 76, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Stockton' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 77, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Studio City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 78, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Sunnyvale' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 79, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Torrance' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 80, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Union City' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 81, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Venice' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 82, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Walnut Creek' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 83, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'West Hollywood' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 84, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'West Los Angeles' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 85, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Westwood' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 86, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: 'Yountville' ,state_id: 5)

10.times do 
	Blurb.create!(city_id: 87, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#CALIFORNIA BLURBS
#OAKLAND BLURBS

#COLORADO CITIES 
City.create!(name: "Boulder", state_id: 6)

10.times do 
	Blurb.create!(city_id: 88, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Denver", state_id: 6)

10.times do 
	Blurb.create!(city_id: 89, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Aspen", state_id: 6)

10.times do 
	Blurb.create!(city_id: 90, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Vail", state_id: 6)
10.times do 
	Blurb.create!(city_id: 91, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#CONNECTICUT CITES
City.create!(name: "Hartford", state_id: 7)

10.times do 
	Blurb.create!(city_id: 92, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "New Haven", state_id: 7)

10.times do 
	Blurb.create!(city_id: 93, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Middletown", state_id: 7)

10.times do 
	Blurb.create!(city_id: 94, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#DELAWARE CITIES
City.create!(name: "Dover", state_id: 8)
10.times do 
	Blurb.create!(city_id: 95, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Wilmington", state_id: 8)

10.times do 
	Blurb.create!(city_id: 96, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "New Castle", state_id: 8)

10.times do 
	Blurb.create!(city_id: 97, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#FLORIDA CITIES
City.create!(name: "Fort Lauderdale", state_id: 9)
10.times do 
	Blurb.create!(city_id: 98, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Gainesville", state_id: 9)
10.times do 
	Blurb.create!(city_id: 99, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Miami", state_id: 9)

10.times do 
	Blurb.create!(city_id: 100, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Orlando", state_id: 9)

10.times do 
	Blurb.create!(city_id: 101, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Tampa", state_id: 9)

10.times do 
	Blurb.create!(city_id: 102, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#GEORGIA CITIES
City.create!(name: "Atlanta", state_id: 10)

10.times do 
	Blurb.create!(city_id: 103, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Savannah", state_id: 10)

10.times do 
	Blurb.create!(city_id: 104, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Augusta", state_id: 10)
10.times do 
	Blurb.create!(city_id: 105, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#HAWAII CITIES
City.create!(name: "Honolulu", state_id: 11)

10.times do 
	Blurb.create!(city_id: 106, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Lahaina", state_id: 11)

10.times do 
	Blurb.create!(city_id: 107, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Kapolei", state_id: 11)
10.times do 
	Blurb.create!(city_id: 108, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#IDAHO CITIES
City.create!(name: "Boise", state_id: 12)
10.times do 
	Blurb.create!(city_id: 109, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Twin Falls", state_id: 12)

10.times do 
	Blurb.create!(city_id: 110, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Idaho Falls", state_id: 12)

10.times do 
	Blurb.create!(city_id: 111, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#ILLINOIS CITIES
City.create!(name: "Springfield", state_id: 13)
  10.times do 
	Blurb.create!(city_id: 112, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Chicago", state_id: 13)
10.times do 
	Blurb.create!(city_id: 113, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Evanston", state_id: 13)

10.times do 
	Blurb.create!(city_id: 114, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Naperville", state_id: 13)
10.times do 
	Blurb.create!(city_id: 115, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Skokie", state_id: 13)
10.times do 
	Blurb.create!(city_id: 116, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#INDIANA CITIES
City.create!(name: "Bloomington", state_id: 14)

10.times do 
	Blurb.create!(city_id: 117, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Indianapolis", state_id: 14)

10.times do 
	Blurb.create!(city_id: 118, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "South Bend", state_id: 14)
10.times do 
	Blurb.create!(city_id: 119, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#IOWA CITIES
City.create!(name: "Iowa City", state_id: 15)
10.times do 
	Blurb.create!(city_id: 120, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Des Moines", state_id: 15)
10.times do 
	Blurb.create!(city_id: 121, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

City.create!(name: "Ames", state_id: 15)
10.times do 
	Blurb.create!(city_id: 122, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#KANSAS CITIES
City.create!(name: "Topeka", state_id: 16)
10.times do 
	Blurb.create!(city_id: 123, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Kansas City", state_id: 16)
10.times do 
	Blurb.create!(city_id: 124, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Wichita", state_id: 16)
10.times do 
	Blurb.create!(city_id: 125, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#KENTUCKY CITIES
City.create!(name: "Louisville", state_id: 17)
10.times do 
	Blurb.create!(city_id: 126, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Frankfort", state_id: 17)

10.times do 
	Blurb.create!(city_id: 127, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Lexington", state_id: 17)

10.times do 
	Blurb.create!(city_id: 128, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#LOUISIANA CITIES
City.create!(name: "New Orleans", state_id: 18)

10.times do 
	Blurb.create!(city_id: 129, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Baton Rouge", state_id: 18)

10.times do 
	Blurb.create!(city_id: 130, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Shreveport", state_id: 18)

10.times do 
	Blurb.create!(city_id: 131, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#MAINE CITIES
City.create!(name: "Augusta", state_id: 19)

10.times do 
	Blurb.create!(city_id: 132, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Bangor", state_id: 19)

10.times do 
	Blurb.create!(city_id: 133, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Bar Harbor", state_id: 19)

10.times do 
	Blurb.create!(city_id: 134, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#MARYLAND CITIES
City.create!(name: "Baltimore", state_id: 20)

10.times do 
	Blurb.create!(city_id: 135, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Annapolis", state_id: 20)

10.times do 
	Blurb.create!(city_id: 136, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Ocean City", state_id: 20)
10.times do 
	Blurb.create!(city_id: 137, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#MASSACHUSETTS CITIES
City.create!(name: "Allston", state_id: 21)

10.times do 
	Blurb.create!(city_id: 138, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Boston", state_id: 21)

10.times do 
	Blurb.create!(city_id: 139, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Brighton", state_id: 21)

10.times do 
	Blurb.create!(city_id: 140, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Brookline", state_id: 21)

10.times do 
	Blurb.create!(city_id: 141, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Cambridge", state_id: 21)

10.times do 
	Blurb.create!(city_id: 142, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Somerville", state_id: 21)

10.times do 
	Blurb.create!(city_id: 143, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#MICHIGAN CITIES
City.create!(name: "Ann Arbor", state_id: 22)

10.times do 
	Blurb.create!(city_id: 144, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Detroit", state_id: 22)

10.times do 
	Blurb.create!(city_id: 145, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Flint", state_id: 22)
10.times do 
	Blurb.create!(city_id: 146, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#MINNESOTA CITES
City.create!(name: "Saint Paul", state_id: 23)

10.times do 
	Blurb.create!(city_id: 147, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Minneapolis", state_id: 23)

10.times do 
	Blurb.create!(city_id: 148, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Duluth", state_id: 23)

10.times do 
	Blurb.create!(city_id: 149, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#MISSISSIPPI CITIES

City.create!(name: "Jackson", state_id: 24)

10.times do 
	Blurb.create!(city_id: 150, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Biloxi", state_id: 24)

10.times do 
	Blurb.create!(city_id: 151, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Gulfport", state_id: 24)

10.times do 
	Blurb.create!(city_id: 152, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#MISSOURI CITIES
City.create!(name: "St. Louis", state_id: 25)

10.times do 
	Blurb.create!(city_id: 153, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Kansas City", state_id: 25)

10.times do 
	Blurb.create!(city_id: 154, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Springfield", state_id: 25)
10.times do 
	Blurb.create!(city_id: 155, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#MONTANA CITIES
City.create!(name: "Helena", state_id: 26)
10.times do 
	Blurb.create!(city_id: 156, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Bozeman", state_id: 26)

10.times do 
	Blurb.create!(city_id: 157, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Missouia", state_id: 26)
10.times do 
	Blurb.create!(city_id: 158, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#NEBRASKA
City.create!(name: "Lincoln", state_id: 27)

10.times do 
	Blurb.create!(city_id: 159, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Omaha", state_id: 27)
10.times do 
	Blurb.create!(city_id: 160, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Kearney", state_id: 27)
10.times do 
	Blurb.create!(city_id: 161, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#NEVADA CITIES
City.create!(name: "Carson City", state_id: 28)
10.times do 
	Blurb.create!(city_id: 162, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Reno", state_id: 28)
10.times do 
	Blurb.create!(city_id: 163, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Los Vegas", state_id: 28)
10.times do 
	Blurb.create!(city_id: 164, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#NEW HAMPSHIRE CITIES 
City.create!(name: "Concord", state_id: 29)
10.times do 
	Blurb.create!(city_id: 165, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Manchester", state_id: 29)
10.times do 
	Blurb.create!(city_id: 166, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Portsmouth", state_id: 29)
10.times do 
	Blurb.create!(city_id: 167, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#NEW JERSEY CITIES
City.create!(name: "Trenton", state_id: 30)
10.times do 
	Blurb.create!(city_id: 168, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Newark", state_id: 30)
10.times do 
	Blurb.create!(city_id: 169, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Alantic City", state_id: 30)
10.times do 
	Blurb.create!(city_id: 170, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#NEW MEXICO CITIES
City.create!(name: "Santa Fe", state_id: 31)
10.times do 
	Blurb.create!(city_id: 171, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Albuquerque", state_id: 31)
10.times do 
	Blurb.create!(city_id: 172, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Las Cruces", state_id: 31)
10.times do 
	Blurb.create!(city_id: 173, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#NEW YORK CITIES

City.create!(name: "Albany", state_id: 32)
10.times do 
	Blurb.create!(city_id: 174, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "New York City", state_id: 32)
10.times do 
	Blurb.create!(city_id: 175, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Buffalo", state_id: 32)
10.times do 
	Blurb.create!(city_id: 176, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#NORTH CAROLINA CITIES

City.create!(name: "Raleigh", state_id: 33)
10.times do 
	Blurb.create!(city_id: 177, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Charlottle", state_id: 33)
10.times do 
	Blurb.create!(city_id: 178, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Asheville", state_id: 33)
10.times do 
	Blurb.create!(city_id: 179, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#NORTH DAKOTA CITIES
City.create!(name: "Raleigh", state_id: 34)
10.times do 
	Blurb.create!(city_id: 180, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Charlottle", state_id: 34)
10.times do 
	Blurb.create!(city_id: 181, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Asheville", state_id: 34)
10.times do 
	Blurb.create!(city_id: 182, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#OHIO CITIES
City.create!(name: "Columbus", state_id: 35)
10.times do 
	Blurb.create!(city_id: 183, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Cleveland", state_id: 35)
10.times do 
	Blurb.create!(city_id: 184, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Cincinnati", state_id: 35)
10.times do 
	Blurb.create!(city_id: 185, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#OKLAHOMA CITIES
City.create!(name: "Oklahoma City", state_id: 36)
10.times do 
	Blurb.create!(city_id: 186, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Tulsa", state_id: 36)
10.times do 
	Blurb.create!(city_id: 187, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Norman", state_id: 36)
10.times do 
	Blurb.create!(city_id: 188, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#OREGON CITIES
City.create!(name: "Salem", state_id: 37)
10.times do 
	Blurb.create!(city_id: 189, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Portland", state_id: 37)
10.times do 
	Blurb.create!(city_id: 190, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Eugene", state_id: 37)
10.times do 
	Blurb.create!(city_id: 191, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#PENNSYLVANIA CITIES 

City.create!(name: "Harrisburg", state_id: 38)
10.times do 
	Blurb.create!(city_id: 192, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Philadelphia", state_id: 38)
10.times do 
	Blurb.create!(city_id: 193, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Pittsburgh", state_id: 38)
10.times do 
	Blurb.create!(city_id: 194, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end


#RHODE ISLAND CITIES
City.create!(name: "Providence", state_id: 39)
10.times do 
	Blurb.create!(city_id: 195, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Newport", state_id: 39)
10.times do 
	Blurb.create!(city_id: 196, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Warwick", state_id: 39)
10.times do 
	Blurb.create!(city_id: 197, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#SOUTH CAROLINA CITIES
City.create!(name: "Columbia", state_id: 40)
10.times do 
	Blurb.create!(city_id: 198, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Charleston", state_id: 40)
10.times do 
	Blurb.create!(city_id: 199, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Myrtle Beach", state_id: 40)
10.times do 
	Blurb.create!(city_id: 200, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#SOUTH DAKOTA CITIES
City.create!(name: "Pierre", state_id: 41)
10.times do 
	Blurb.create!(city_id: 201, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Sioux Falls", state_id: 41)
10.times do 
	Blurb.create!(city_id: 202, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Rapid City", state_id: 41)
10.times do 
	Blurb.create!(city_id: 203, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#TENNESSEE CITIES

City.create!(name: "Nashville", state_id: 42)
10.times do 
	Blurb.create!(city_id: 204, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Memphis", state_id: 42)
10.times do 
	Blurb.create!(city_id: 205, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Knoxville", state_id: 42)
10.times do 
	Blurb.create!(city_id: 206, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#TEXAS CITIES 
City.create!(name: "Austin", state_id: 43)
10.times do 
	Blurb.create!(city_id: 207, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Dallas", state_id: 43)
10.times do 
	Blurb.create!(city_id: 208, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Housten", state_id: 43)
10.times do 
	Blurb.create!(city_id: 209, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#UTAH CITIES
City.create!(name: "Salt Lake City", state_id: 44)
10.times do 
	Blurb.create!(city_id: 210, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Provo", state_id: 44)
10.times do 
	Blurb.create!(city_id: 211, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "St. George", state_id: 44)
10.times do 
	Blurb.create!(city_id: 212, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#VERMONT CITIES
City.create!(name: "Montpelier", state_id: 45)
10.times do 
	Blurb.create!(city_id: 213, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Stowe", state_id: 45)
10.times do 
	Blurb.create!(city_id: 214, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Burlington", state_id: 45)
10.times do 
	Blurb.create!(city_id: 215, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#VIRGINIA CITIES
City.create!(name: "Richmond", state_id: 46)
10.times do 
	Blurb.create!(city_id: 216, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Norfolk", state_id: 46)
10.times do 
	Blurb.create!(city_id: 217, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Virginia Beach", state_id: 46)
10.times do 
	Blurb.create!(city_id: 218, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#WASHINGTON CITIES
City.create!(name: "Seattle", state_id: 47)
10.times do 
	Blurb.create!(city_id: 219, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Olympia", state_id: 47)
10.times do 
	Blurb.create!(city_id: 220, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Tacoma", state_id: 47)
10.times do 
	Blurb.create!(city_id: 221, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#WEST VIRGINIA CITIES
City.create!(name: "Charleston", state_id: 48)
10.times do 
	Blurb.create!(city_id: 222, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Huntington", state_id: 48)
10.times do 
	Blurb.create!(city_id: 223, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Morgantown", state_id: 48)
10.times do 
	Blurb.create!(city_id: 224, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#WISCONSIN CITIES
City.create!(name: "Madison", state_id: 49)
10.times do 
	Blurb.create!(city_id: 225, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Milwaukee", state_id: 49)
10.times do 
	Blurb.create!(city_id: 226, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Green Bay", state_id: 49)
10.times do 
	Blurb.create!(city_id: 227, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#WYOMING CITIES
City.create!(name: "Cheyenne", state_id: 50)
10.times do 
	Blurb.create!(city_id: 228, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Jackson", state_id: 50)
10.times do 
	Blurb.create!(city_id: 229, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
City.create!(name: "Casper", state_id: 50)
10.times do 
	Blurb.create!(city_id: 230, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end
#FORGOTTEN ALASKA CITY
City.create!(name: "Fairbanks", state_id: 2)

10.times do 
	Blurb.create!(city_id: 231, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end

#FORGOTTEN ARKANSAS CITY
City.create!(name: "Marked Tree", state_id: 4)

10.times do 
	Blurb.create!(city_id: 232, traffic: rand(1..5), weather: rand(1..5), food: rand(1..5), nightlife: rand(1..5), blurb: Faker::Hipster.paragraph)
end







