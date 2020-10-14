Rails.application.routes.draw do
  get 'workflow/index'
  get 'workflow/new'
  post 'workflow/create'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
