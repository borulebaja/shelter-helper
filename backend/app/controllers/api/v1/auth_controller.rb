class Api::V1::AuthController < Api::V1::ApplicationController
    skip_before_action :check_authentication

    def create 

        user = User.find_by(email: params[:email])

        if user && user.authenticate(params[:password])
            render json: {
                token: JWT.encode({ user_id: user.id }, 'my_apps_secret'),
                user: user
            }
        else
            render json: { error: 'email or password are incorrect' }, status: 401
        end
    end
end