class Api::StatesController < ApplicationController

	def show
		@state = City.find(params[:id])
		render :show
	end

	private
	def city_params
		params.require(:city).permit(:name)
	end
end