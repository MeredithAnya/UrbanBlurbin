class Api::CitiesController < ApplicationController

	def show
		@city = City.find(params[:id])
		render :show
	end

	private
	def city_params
		params.require(:city).permit(:name)
	end
end