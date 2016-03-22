# UrbanBlurbin

[Link][heroku] to live version

[heroku]: www.urbanblurblin.com

![alt text][screenshot]
  
[screenshot]: ./app/assets/images/UrbanBlurbinScreenshot.png

## Minimum Viable Product
UrbanBlurbin is a web application inspired by RateMyProfessors built using Ruby on Rails
and React.js. UrbanBlurbin allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

* Create an account
* Log in / Log out
* Search by state using clickable US map
* View top overall rated cities for the currently viewed state
* Search by cities within the currently viewed state
* Write a blurb about the currently viewed city or search all cities
* Favorite or unfavorite cities if user is logged in


##Technologies

* Rails
* React.js
* Flux
* Maphilight.js
* BCrypt
* JBuilder
* New Relic RPM

##Blurb Implementation
When a blurb is written about a city, the blurb controller gets the city 
```ruby
@city = @blurb.city
@averages = @city.averages
```

##Future Features 
-[ ] Users can unfavorite cities from their favorites tab directly
-[ ] Users have the ability to both save and edit the blurbs they write if they are signed in
-[ ] Upvotes and downvotes on blurbs for whether other users found that blurb helpful or unhelpful, respectively


## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline





