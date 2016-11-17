class V1::RecordsController < V1::ApplicationController
  before_action :set_record, only: [:show, :update, :destroy]

  swagger_path '/pets' do
    operation :get do
      key :description, 'Returns all pets from the system that the user has access to'
      key :operationId, 'findPets'
      key :produces, [
        'application/json',
        'text/html'
      ]
      key :tags, [
        'pet'
      ]
      parameter do
        key :name, :tags
        key :in, :query
        key :description, 'tags to filter by'
        key :required, false
        key :type, :array
        items do
          key :type, :string
        end
        key :collectionFormat, :csv
      end
      parameter do
        key :name, :limit
        key :in, :query
        key :description, 'maximum number of results to return'
        key :required, false
        key :type, :integer
        key :format, :int32
      end
      response :default do
        key :description, 'unexpected error'
        schema do
        end
      end
    end
  end

  def index
    @records = Record.all
  end

  def show
  end

  def create
    @record = Record.new(record_params)

    if @record.save
      render :show, status: :created, location: v1_record_url(@record)
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def update
    if @record.update(record_params)
      render :show, status: :ok, location: v1_record_url(@record)
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @record.destroy
  end

  private

  def set_record
    @record = Record.find(params[:id])
  end

  def record_params
    params.require(:record).permit(:title)
  end
end
