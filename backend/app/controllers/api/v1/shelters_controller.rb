class Api::V1::SheltersController < Api::V1::ApplicationController
    before_action :define_current_shelter

    
    def create
        shelter = Shelter.create(shelter_params)
        render json: shelter
    end
    
    def index
        render json: Shelter.all
    end
    
    def show
        render json: current_shelter, include: [:needs]
    end
    
    def update
        current_shelter.update(shelter_params)
        render json: current_shelter
    end
    
    def destroy
        current_shelter.destroy
        render json: current_shelter
    end
    
    def shelter_params
        params.require(:shelter).permit(:name, :address, :phone, :image_url, :latitude, :longitude, :user_id)
    end
    
    def define_current_shelter
        if params[:id]
            @current_shelter = Shelter.find(params[:id])
        else
            @current_shelter = Shelter.new
        end
    end
    
    def current_shelter
        @current_shelter
    end
end
