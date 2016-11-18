class ApidocsController < ActionController::API
  include Swagger::Blocks
  swagger_root do
    key :swagger, '2.0'
    info do
      key :version, '1.0.0'
      key :title, 'React & Rails boilerplate'
      key :description, 'blah-blah-blah'
      license do
        key :name, 'MIT'
      end
    end
    key :basePath, '/v1'
    key :consumes, ['application/json']
    key :produces, ['application/json']
  end

  SWAGGERED_CLASSES = [
    Record,
    V1::RecordsController,
    self
  ].freeze

  def index
    render json: Swagger::Blocks.build_root_json(SWAGGERED_CLASSES)
  end
end
