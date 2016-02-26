class Api::CitiesController < ApplicationController

	def show
		@city = City.find(params[:id])
		render :show
	end

	def city
		@city = City.getCity(
			params[:cityName],
			params[:stateId])
		render :city
	end

	private
	def city_params
		params.require(:city).permit(:name,:stateId,:cityName)
	end
end