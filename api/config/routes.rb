Rails.application.routes.draw do
  namespace :v1 do
    resources :records
    resources :tokens, only: [:create]
  end
  resources :apidocs, only: [:index]
end
