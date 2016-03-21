class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.id == 2 && params[:user][:cityId]
      login!(user)
      page_info = {cityId: params[:user][:cityId], stateId: params[:user][:stateId], name: user.username}
      render json: page_info
    elsif user
      login!(user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid username or password"]
      render :new
    end
  end

  def destroy
    logout!
    render json: {}
  end

end
