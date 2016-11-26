class V1::ApplicationController < ActionController::API
  include Swagger::Blocks
  format 'json'

  def authenticate
    head 401 unless authentication_header
    @user = User.find_by(token: authentication_header)
    @user || head(401)
  end

  def authentication_header
    request.headers['Authorization']
  end
end
