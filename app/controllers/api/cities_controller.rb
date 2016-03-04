class Api::CitiesController < ApplicationController
    def index
    	@cities = City.includes(:state).all
    	render :index
    end
	def show
		@city = City.find(params[:id])
		@averages = @city.averages
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