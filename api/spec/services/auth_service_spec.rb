require 'rails_helper'

RSpec.describe AuthService do
  subject { AuthService.new }
  let(:user) { create(:user) }
  describe '#profile' do
    it 'sets new token' do
      token = subject.auth(user.login, Faker::Internet.slug)
      expect(user.reload.token).to eq(token)
    end

    it 'returns nil on invalid credentials' do
      profile = subject.auth(Faker::Internet.slug, Faker::Internet.slug)
      expect(profile).to be_nil
    end
  end
end
