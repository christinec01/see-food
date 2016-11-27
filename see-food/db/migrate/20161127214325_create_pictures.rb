class CreatePictures < ActiveRecord::Migration[5.0]
  def change
    create_table :pictures do |t|
      t.string :pic_url
      t.references :restaurant, foreign_key: true
    end
  end
end
