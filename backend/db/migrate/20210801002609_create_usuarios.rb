class CreateUsuarios < ActiveRecord::Migration[6.1]
  def change
    create_table :usuarios do |t|
      t.string :nome
      t.string :email
      t.string :senha
      t.boolean :ativo

      t.timestamps
    end
  end
end
