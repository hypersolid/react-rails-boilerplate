require 'rails_helper'

RSpec.describe V1::RecordsController, type: :controller do
  render_views

  before :each do
    request.headers['accept'] = 'application/json'
  end

  describe 'GET index' do
    it 'responds with correct status code' do
      get :index
      expect_status(200)
    end
    it 'returns one record' do
      create(:record)
      get :index
      expect_json_types(records: :array)
      expect_json_sizes(records: 1)
    end
    it 'returns correct title' do
      record = create(:record)
      get :index
      expect_json('records.0', title: record.title)
    end
  end

  describe 'update record' do
    let(:record) { create(:record) }
    it 'responds with correct status code' do
      new_title = Faker::Name.name
      put :update, params: { id: record.id, record: { title: new_title } }
      expect_status(200)
    end
    it 'updates record' do
      new_title = Faker::Name.name
      put :update, params: { id: record.id, record: { title: new_title } }
      expect(record.reload.title).to eq(new_title)
      expect_json('title', record.title)
    end
  end

  describe 'create record' do
    it 'responds with correct status code' do
      post :create, params: { record: build(:record).attributes }
      expect_status(201)
    end
    it 'creates record' do
      expect do
        post :create, params: { record: build(:record).attributes }
      end.to change{
        Record.count
      }.by(1)
    end
  end

  describe 'destroy record' do
    it 'responds with correct status code' do
      delete :destroy, params: { id: create(:record).id }
      expect_status(204)
    end
    it 'creates record' do
      record = create(:record)
      expect do
        delete :destroy, params: { id: record.id }
      end.to change{
        Record.count
      }.by(-1)
    end
  end
end
