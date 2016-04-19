class Api::StatesController < ApplicationController

	def show
		@state = State.find(params[:id])
		@top_cities = @state.top_cities	
		@top_city_one = @top_cities[0][0]
		@averages_one = @top_cities[0][1]
		@top_city_two = @top_cities[1][0]
		@averages_two = @top_cities[1][1]
		@top_city_three = @top_cities[2][0]
		@averages_three = @top_cities[2][1]
		render :show
	end

	private
	def state_params
		params.require(:state).permit(:name, :stateId)
	end
end