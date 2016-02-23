# Flux Stores

### StateStore

Holds all persisted state data.

##### Actions:
- `receiveAllStates`


##### Listeners:
- `StateIndex` (passes to `StateIndexItem` via props)


### CityStore

Holds all persisted city data.

##### Actions:
- `receiveAllCities`

##### Listeners:
- `CityIndex`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`