class AddColumnsToRestuarants < ActiveRecord::Migration[5.0]
  def change
    add_column :restaurants, :address, :string
    add_column :restaurants, :phone_number, :string
    add_column :restaurants, :website, :string
    add_column :restaurants, :picture_url, :string
  end
end
