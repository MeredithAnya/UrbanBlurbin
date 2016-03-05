Rails.application.routes.draw do
  root to: "static_pages#root"

  resources :users, only: [:new, :create, :show]
  resource :session, only: [:new, :create, :destroy]

   namespace :api, defaults: {format: :json} do
    resources :states, only: [:show] 
    resources :cities, only: [:show, :index]
    get 'city/:cityName/:stateId/', to: 'cities#city'
    resources :blurbs, only: [:create]
    get 'favorites/:username', to: 'favorites#show'
    post 'favorites/:cityId/:username', to: 'favorities#create'
  end

  
  
end
