class V1::RecordsController < V1::ApplicationController
  swagger_controller :records, 'User Management'

  swagger_api :index do
    summary 'Fetches all User items'
    notes 'This lists all the active users'
    param :query, :page, :integer, :optional, 'Page number'
    response :ok
    response :no_content
  end

  format 'json'
  before_action :set_record, only: [:show, :update, :destroy]

  # GET /records
  # GET /records.json
  def index
    @records = Record.all
  end

  # GET /records/1
  # GET /records/1.json
  def show
  end

  # POST /records
  # POST /records.json
  def create
    @record = Record.new(record_params)

    if @record.save
      render :show, status: :created, location: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /records/1
  # PATCH/PUT /records/1.json
  def update
    if @record.update(record_params)
      render :show, status: :ok, location: @record
    else
      render json: @record.errors, status: :unprocessable_entity
    end
  end

  # DELETE /records/1
  # DELETE /records/1.json
  def destroy
    @record.destroy
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_record
    @record = Record.find(params[:id])
  end

  # Never trust parameters from the scary internet, only allow the white list through.
  def record_params
    params.require(:record).permit(:title)
  end
end
