require 'rails_helper'

RSpec.describe V1::TokensController, type: :controller do
  before :each do
    request.headers['accept'] = 'application/json'
  end

  let(:valid_user) do
    { user: {
      login: "#{Faker::Internet.slug}@registered.com",
      password: Faker::Internet.slug
    } }
  end
  let(:invalid_user) { { user: { login: Faker::Internet.slug, password: Faker::Internet.slug } } }

  describe 'create record' do
    it 'responds with correct status code for valid login' do
      post :create, params: valid_user
      expect_status(200)
    end
    it 'responds with correct status code for invalid login' do
      post :create, params: invalid_user
      expect_status(401)
    end
    it 'creates record on first login' do
      expect do
        post :create, params: valid_user
      end.to change{
        User.count
      }.by(1)
    end
    it 'updates record on second and following logins' do
      post :create, params: valid_user
      expect do
        post :create, params: valid_user
      end.to change{
        User.count
      }.by(0)
    end
  end
end
