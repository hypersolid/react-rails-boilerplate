class V1::ApplicationController < ActionController::API
  include Swagger::Blocks
  format 'json'
end
