class Api::V1::NeedsController < Api::V1::ApplicationController
    before_action :define_current_need

    
    def create
        need = Need.create(need_params)
        render json: need
    end
    
    def index
        shelter = Shelter.find(params[:shelter_id])

        render json: shelter.needs
    end
    
    def show
        render json: current_need
    end
    
    def update
        current_need.update(need_params)
        render json: current_need
    end
    
    def destroy
        current_need.destroy
        render json: current_need
    end
    
    def need_params
        params.require(:need).permit(:title, :image_url, :description, :details, :quantity_needed, :quantity_bought, :shopping_url, :shelter_id)
    end
    
    def define_current_need
        if params[:id]
            @current_need = Need.find(params[:id])
        else
            @current_need = Need.new
        end
    end
    
    def current_need
        @current_need
    end
end
