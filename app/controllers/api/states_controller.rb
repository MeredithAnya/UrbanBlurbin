class Api::StatesController < ApplicationController

	def show
		@state = State.find(params[:stateId])
		render :show
	end

	private
	def state_params
		params.require(:state).permit(:name)
	end
end