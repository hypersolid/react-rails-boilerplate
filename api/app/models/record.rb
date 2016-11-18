class Record < ApplicationRecord
  include Swagger::Blocks

  swagger_schema :Record do
    key :required, [:title]
    property :title do
      key :type, :string
    end
  end
end
