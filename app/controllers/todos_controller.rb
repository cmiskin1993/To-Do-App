class TodosController < ApplicationController
  
    def index
      render json: Recipe.all
    end
  
    def create
      recipe = @current_user.todos.create!(todo_params)
      render json: todo, status: :created
    end
  
    private
  
    def todo_params
      params.permit(:date, :title)
    end
  
  end