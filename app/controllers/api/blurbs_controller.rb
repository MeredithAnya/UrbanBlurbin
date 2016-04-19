class Api::BlurbsController < ApplicationController

	def create
		@blurb = Blurb.new(blurb_params)
		if @blurb.save 
			@city = @blurb.city
			@averages = @city.averages
			@blubs = city
			render :show
		end
  
	end


	private
	def blurb_params
		params.require(:blurb).permit(:traffic, :weather, :food, :nightlife, :blurb, :city_id)
	end
end