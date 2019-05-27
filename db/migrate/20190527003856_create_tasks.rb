class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :status
      t.string :type
      t.string :text
      t.references :task, foreign_key: true
      t.references :patient, foreign_key: true
      t.references :provider, foreign_key: true
      t.string :title

      t.timestamps
    end
  end
end
