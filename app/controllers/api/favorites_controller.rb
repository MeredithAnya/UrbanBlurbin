class Api::FavoritesController < ApplicationController

	def show
		user = User.findByUsername(params[:username])
       
		@favorites = user.favorite_cities
		render :show
	end

	def create
		user = User.findByUsername(params[:username])
		Favorite.create!(city_id: params[:cityId], user_id: user.id)
		@favorites = user.favorite_cities
		render :show
	end


	private
	def favorite_params
		params.require(:favorite).permit(:username)
	end
	
end