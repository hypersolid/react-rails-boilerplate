json.extract! record, :id, :title, :created_at, :updated_at
json.url v1_record_url(record, format: :json)
