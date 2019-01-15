class Api::V1::NeedsController < Api::V1::ApplicationController
    before_action :define_current_need

    
    def create
        need = Need.create(need_params)
        render json: need
    end
    
    def index
        render json: Need.all
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
        params.require(:need).permit(:title, :image_url, :description, :details, :shelter_id)
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
