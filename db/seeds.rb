# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
#USER
User.create!(username: 'meredith', password: 'meredith')

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
City.create!(name: "Auburn", state_id: 1)
City.create!(name: "Montgomery", state_id: 1)

#ALASKA CITIES
City.create!(name: "Anchorage", state_id: 2)
City.create!(name: "Juneau", state_id: 2)

#ARIZONA CITIES
City.create!(name: "Phoenix", state_id: 3)
City.create!(name: "Scottsdale", state_id: 3)
City.create!(name: "Tempe", state_id: 3)
City.create!(name: "Tuscon", state_id: 3)

#ARKANAS CITIES
City.create!(name: "Little Rock", state_id: 4)
City.create!(name: "Hot Springs", state_id: 4)

#CALIFORNIA CITES
City.create!(name: 'Alameda' ,state_id: 5)
City.create!(name: 'Albany' ,state_id: 5)
City.create!(name: 'Alhambra' ,state_id: 5)
City.create!(name: 'Anaheim' ,state_id: 5)
City.create!(name: 'Belmont' ,state_id: 5)
City.create!(name: 'Berkeley' ,state_id: 5)
City.create!(name: 'Beverly Hills' ,state_id: 5)
City.create!(name: 'Big Sur' ,state_id: 5)
City.create!(name: 'Burbank' ,state_id: 5)
City.create!(name: 'Concord' ,state_id: 5)
City.create!(name: 'Costa Mesa' ,state_id: 5)
City.create!(name: 'Culver City' ,state_id: 5)
City.create!(name: 'Cupertino' ,state_id: 5)
City.create!(name: 'Daly City' ,state_id: 5)
City.create!(name: 'Davis' ,state_id: 5)
City.create!(name: 'Dublin' ,state_id: 5)
City.create!(name: 'Emeryville' ,state_id: 5)
City.create!(name: 'Foster City' ,state_id: 5)
City.create!(name: 'Fremont' ,state_id: 5)
City.create!(name: 'Glendale' ,state_id: 5)
City.create!(name: 'Hayward' ,state_id: 5)
City.create!(name: 'Healdsburg' ,state_id: 5)
City.create!(name: 'Huntington Beach' ,state_id: 5)
City.create!(name: 'Irvine' ,state_id: 5)
City.create!(name: 'La Jolla' ,state_id: 5)
City.create!(name: 'Livermore' ,state_id: 5)
City.create!(name: 'Long Beach' ,state_id: 5)
City.create!(name: 'Los Altos' ,state_id: 5)
City.create!(name: 'Los Angeles' ,state_id: 5)
City.create!(name: 'Los Gatos' ,state_id: 5)
City.create!(name: 'Marina del Rey' ,state_id: 5)
City.create!(name: 'Menlo Park' ,state_id: 5)
City.create!(name: 'Mill Valley' ,state_id: 5)
City.create!(name: 'Millbrae' ,state_id: 5)
City.create!(name: 'Milpitas' ,state_id: 5)
City.create!(name: 'Monterey' ,state_id: 5)
City.create!(name: 'Mountain View' ,state_id: 5)
City.create!(name: 'Napa' ,state_id: 5)
City.create!(name: 'Newwark' ,state_id: 5)
City.create!(name: 'Newport Beach' ,state_id: 5)
City.create!(name: 'Oakland' ,state_id: 5)
City.create!(name: 'Orange County' ,state_id: 5)
City.create!(name: 'Palo Alto' ,state_id: 5)
City.create!(name: 'Park La Brea' ,state_id: 5)
City.create!(name: 'Pasadena' ,state_id: 5)
City.create!(name: 'Pleasanton' ,state_id: 5)
City.create!(name: 'Redondo Beach' ,state_id: 5)
City.create!(name: 'Redwood City' ,state_id: 5)
City.create!(name: 'Sacramento' ,state_id: 5)
City.create!(name: 'San Bruno' ,state_id: 5)
City.create!(name: 'San Carlos' ,state_id: 5)
City.create!(name: 'San Diego' ,state_id: 5)
City.create!(name: 'San Francisco' ,state_id: 5)
City.create!(name: 'San Jose' ,state_id: 5)
City.create!(name: 'San Leandro' ,state_id: 5)
City.create!(name: 'San Mateo' ,state_id: 5)
City.create!(name: 'San Rafael' ,state_id: 5)
City.create!(name: 'Santa Barbara' ,state_id: 5)
City.create!(name: 'Santa Clara' ,state_id: 5)
City.create!(name: 'Santa Cruz' ,state_id: 5)
City.create!(name: 'Santa Monica' ,state_id: 5)
City.create!(name: 'Santa Rosa' ,state_id: 5)
City.create!(name: 'Sausalito' ,state_id: 5)
City.create!(name: 'Sonoma' ,state_id: 5)
City.create!(name: 'South Lake Tahoe' ,state_id: 5)
City.create!(name: 'Stockton' ,state_id: 5)
City.create!(name: 'Studio City' ,state_id: 5)
City.create!(name: 'Sunnyvale' ,state_id: 5)
City.create!(name: 'Torrance' ,state_id: 5)
City.create!(name: 'Union City' ,state_id: 5)
City.create!(name: 'Venice' ,state_id: 5)
City.create!(name: 'Walnut Creek' ,state_id: 5)
City.create!(name: 'West Hollywood' ,state_id: 5)
City.create!(name: 'West Los Angeles' ,state_id: 5)
City.create!(name: 'Westwood' ,state_id: 5)
City.create!(name: 'Yountville' ,state_id: 5)

#COLORADO CITIES 
City.create!(name: "Boulder", state_id: 6)
City.create!(name: "Denver", state_id: 6)
City.create!(name: "Aspen", state_id: 6)
City.create!(name: "Vail", state_id: 6)

#CONNECTICUT CITES
City.create!(name: "Hartford", state_id: 7)
City.create!(name: "New Haven", state_id: 7)

#DELAWARE CITIES
City.create!(name: "Dover", state_id: 8)
City.create!(name: "Wilmington", state_id: 8)

#FLORIDA CITIES
City.create!(name: "Fort Lauderdale", state_id: 9)
City.create!(name: "Gainesville", state_id: 9)
City.create!(name: "Miami", state_id: 9)
City.create!(name: "Orlando", state_id: 9)
City.create!(name: "Tampa", state_id: 9)

#GEORGIA CITIES
City.create!(name: "Atlanta", state_id: 10)
City.create!(name: "Savannah", state_id: 10)

#HAWAII CITIES
City.create!(name: "Honolulu", state_id: 11)
City.create!(name: "Lahaina", state_id: 11)

#IDAHO CITIES
City.create!(name: "Boise", state_id: 12)
City.create!(name: "Twin Falls", state_id: 12)

#ILLINOIS CITIES
City.create!(name: "Springfield", state_id: 13)
City.create!(name: "Chicago", state_id: 13)
City.create!(name: "Evanston", state_id: 13)
City.create!(name: "Naperville", state_id: 13)
City.create!(name: "Skokie", state_id: 13)

#INDIANA CITIES
City.create!(name: "Bloomington", state_id: 14)
City.create!(name: "Indianapolis", state_id: 14)

#IOWA CITIES
City.create!(name: "Iowa City", state_id: 15)
City.create!(name: "Des Moines", state_id: 15)









