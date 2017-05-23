Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notes, except: [:new, :edit]
    resources :notebooks, only: [:index, :create, :destroy]
    resources :tags, only: [:index, :create, :destroy]
  end

end
