class V1::TokensController < V1::ApplicationController
  def create
    token = AuthService.new.auth(*user_params.values)
    if token
      render json: { token: token }, status: 200
    else
      head 401
    end
  end

  private

  def user_params
    params.require(:user).permit(:login, :password)
  end
end
