class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :login
      t.string :token
    end
    add_index :users, :login
    add_index :users, :token
  end
end
