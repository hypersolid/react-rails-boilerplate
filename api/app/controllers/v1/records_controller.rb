class V1::RecordsController < V1::ApplicationController
  before_action :set_record, only: [:show, :update, :destroy]

  swagger_path '/records' do
    operation :get do
      key :description, 'Returns all records'
      key :operationId, 'findPets'
      key :produces, ['application/json']
      response 200 do
        key :description, 'usual response'
        schema do
          key :type, :array
          items do
            key :'$ref', :Record
          end
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
