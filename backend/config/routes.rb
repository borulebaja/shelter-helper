Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :users
      resources :shelters
      resources :needs
      resources :auth
      resources :shelters do 
        resources :needs
      end
    end
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
