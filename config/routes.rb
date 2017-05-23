Rails.application.routes.draw do
  namespace :api do
    get 'tags/index'
  end

  namespace :api do
    get 'tags/create'
  end

  namespace :api do
    get 'tags/destroy'
  end

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]

    resources :notes, except: [:new, :edit]
    resources :notebooks, only: [:index, :create, :destroy]
  end

end
