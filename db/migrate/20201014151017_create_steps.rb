class CreateSteps < ActiveRecord::Migration[6.0]
  def change
    create_table :steps do |t|
      t.integer :workflow_id
      t.string :status

      t.timestamps
    end
  end
end
