class CreateProviders < ActiveRecord::Migration[5.2]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :address
      t.string :phone
      t.string :emr

      t.timestamps
    end
  end
end
