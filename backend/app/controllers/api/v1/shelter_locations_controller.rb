class Api::V1::ShelterLocationsController < Api::V1::ApplicationController
    before_action :define_current_shelter_location

    
    def create
        shelter_location = ShelterLocation.create(shelter_location_params)
        render json: shelter_location
    end
    
    def index
        render json: ShelterLocation.all
    end
    
    def show
        render json: current_shelter_location
    end
    
    def update
        current_shelter_location.update(shelter_location_params)
        render json: current_shelter_location
    end
    
    def destroy
        current_shelter_location.destroy
        render json: current_shelter_location
    end
    
    def shelter_location_params
        params.require(:shelter_location).permit(:name, :address, :latitude, :longitude, :user_id)
    end
    
    def define_current_shelter_location
        if params[:id]
            @current_shelter_location = ShelterLocation.find(params[:id])
        else
            @current_shelter_location = ShelterLocation.new
        end
    end
    
    def current_shelter_location
        @current_shelter_location
    end
end
