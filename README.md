# UrbanBlurbin   
![alt text][screenshot]
                        								
[Link][heroku] to live version

[heroku]: www.urbanblurbin.com

  
[screenshot]: ./app/assets/images/UrbanBlurbinScreenshot.png
[fullscreenshot]:./app/assets/images/fullscreenshot.png

## Minimum Viable Product
UrbanBlurbin is a web application inspired by RateMyProfessors built on Ruby on Rails. UrbanBlurbin has hand-rolled user authentication and is almost exclusively a single page application, using React.js for the frontend technology. 

Users can search by cities in the currently selected state, blurb about they city, and favorite or unfavorite cities if they are currently signed in.

![alt text][fullscreenshot]



<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

##Technologies
* Rails
* React.js
* Maphilight.js
* Flux
* BCrypt
* JBuilder
* New Relic RPM

##Blurb Implementation
When a blurb is written about a city, the blurb controller gets the city through the association and the corresponding averages. 
```ruby
@city = @blurb.city
@averages = @city.averages
```
The city now can be wrapped in a json object that has all the updated averages in addition to the newly written blurb.
```json
json.extract! @city, :id, :name
    json.avgs do 
      json.extract! @averages, :traffic, :weather, :food, :nightlife, :overall
    end
	json.blurbs do 
	  json.array! @city.blurbs, :traffic, :weather, :food, :nightlife, :blurb
	end 
```
In this way, when a blurb is successfully posted, the flux store associated with the cities will receive the updated city, causing the appropriate component to render the correct city information. This flow allows for the newly written blurb to instantly be reflected in current city's averages.

```javascript
 createBlurb: function(blurb){
    $.ajax({
      url: 'api/blurbs',
      type: 'POST',
      dataType: 'json',
      data: blurb,
      success:(function(city){
        CityActions.receiveCity(city);
      })
    });
  }  
``` 
The State component's state updates when a blurb is created in order to acheive consistency if the current city also happens to be one of the top rated cities rendered in the state component.

##Future Features 
  - [ ] Users can unfavorite cities from their favorites tab directly
  - [ ] Users have the ability to both save and edit the blurbs they write if they are signed in
  - [ ] Upvotes and downvotes on blurbs for whether other users found that blurb helpful or unhelpful, respectively


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






