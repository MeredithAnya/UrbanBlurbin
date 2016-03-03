class Api::StatesController < ApplicationController

	def show
		@state = State.find(params[:id])
		@top_city_one = City.find(@state.top_cities[0])
		@averages_one = @top_city_one.averages
		@top_city_two = City.find(@state.top_cities[1])
		@averages_two = @top_city_two.averages
		@top_city_three = City.find(@state.top_cities[2])
		@averages_three = @top_city_three.averages
		render :show
	end

	private
	def state_params
		params.require(:state).permit(:name, :stateId)
	end
end