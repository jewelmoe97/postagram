

Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html
  
  # Defines the root path route ("/")
  # root "articles#index"

  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"




  get "/posts", to: "posts#index"
   get "/posts/:id", to: "posts#show"
   post "/posts", to: "posts#create"
   patch "/posts/:id", to: "posts#edit"
   delete '/posts/:id', to: 'posts#destroy'

   get "/comments" , to: "comments#index"
   post "/comments", to: "comments#create"
  delete '/comments/:id', to: 'comments#destroy'
 

  # resources :likes, only: [:create, :destroy]

  # post "/likes", to: "likes#create"
  # delete "/likes", to: "likes#destroy"

  # config/routes.rb

  post '/posts/:post_id/likes', to: 'likes#create', as: 'create_like'
  delete '/posts/:post_id/likes', to: 'likes#destroy', as: 'destroy_like'














end
