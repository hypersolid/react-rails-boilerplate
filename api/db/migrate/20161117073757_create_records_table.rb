class CreateRecordsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :records_tables do |t|
      t.string :title
    end
  end
end
