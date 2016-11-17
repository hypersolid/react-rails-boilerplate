json.records do
  json.array! @records, partial: 'records/record', as: :record
end
