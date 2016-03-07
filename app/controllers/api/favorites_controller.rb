class Api::FavoritesController < ApplicationController

	def show
		user = User.findByUsername(params[:username])
       
		@favorites = user.favorite_cities
		render :show
	end

	def create
		
		user = User.findByUsername(params[:favorite][:username])
		Favorite.create!(city_id: params[:favorite][:city_id], user_id: user.id)
		@favorites = user.favorite_cities
		render :show
	end

	def destroy
		user = User.findByUsername(params[:favorite][:username])
		favorite = Favorite.findByCreds(params[:favorite][:city_id], user.id)
	    favorite.destroy!
		@favorites = user.favorite_cities
		render :show

	end



	private
	def favorite_params
		params.require(:favorite).permit(:username, :city_id)
	end
	
end