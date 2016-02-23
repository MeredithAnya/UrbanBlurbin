# Schema Information

## cities
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
state_id    | integer   | not null, foreign key (references states), indexed
user_id     | integer   | not null, foreign key (references users), indexed


## favorites
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null
city_id     | integer   | not null


## states
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## ratings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
city_id     | integer   | not null, foreign key (references cities), indexed
traffic     | float     | not null
weather     | float     | not null
nightlife   | float     | not null
food        | float     | not null
review      | text      | not null


## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
city_id     | integer   | not null, foreign key (references cities), indexed, unique [tag_id]
tag_id      | integer   | not null, foreign key (references tags), indexed

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique