json.records do
  json.array! @records, partial: 'record', as: :record
end
