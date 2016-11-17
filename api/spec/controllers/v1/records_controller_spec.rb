require 'rails_helper'

RSpec.describe V1::RecordsController, type: :controller do
  render_views

  before :each do
    request.headers['accept'] = 'application/json'
  end

  describe 'GET index' do
    it 'returns correct types' do
      record = create(:record)

      get :index

      expect_status(200)
      expect_json_types(records: :array)
      expect_json_sizes(records: 1)
      expect_json('records.0', title: record.title)
    end
  end
end
