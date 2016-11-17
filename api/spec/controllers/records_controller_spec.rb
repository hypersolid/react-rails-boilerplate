require 'rails_helper'

RSpec.describe RecordsController, :type => :controller do
  render_views

  before :each do
    request.headers["accept"] = 'application/json'
  end

  describe 'GET index' do
    it 'returns correct types' do
      get :index

      expect_status(200)
      expect_json_types(records: :array_of_strings)
    end
  end
end
