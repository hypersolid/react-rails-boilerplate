FactoryGirl.define do
  factory :user do
    login { Faker::Internet.slug + '@registered.com' }
    token { SecureRandom.hex(64) }
  end
end
