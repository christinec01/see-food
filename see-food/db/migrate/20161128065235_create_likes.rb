class CreateLikes < ActiveRecord::Migration[5.0]
  def change
    create_table :likes do |t|
      t.references :user, foreign_key: true
      t.references :restaurant, foreign_key: true
    end
  end
end
