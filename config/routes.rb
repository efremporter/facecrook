Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :destroy, :show, :update] do 
      resources :posts, only: [:index]
      resources :likes, only: [:index]
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:index, :show, :create, :destroy, :update] do
      resources :comments, only: [:index, :create, :udpate]
      resources :likes, only: [:index, :create]
    end
    resources :comments, only: [:destroy]
    resources :likes, only: [:destroy, :show]
  end
end
