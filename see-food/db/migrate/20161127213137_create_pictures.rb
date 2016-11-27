class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.string :pic_url
      t.references :resturant, foreign_key: true

      t.timestamps
    end
  end
end
