class CreateContatos < ActiveRecord::Migration[6.1]
  def change
    create_table :contatos do |t|
      t.integer :telefone
      t.boolean :ativo

      t.timestamps
    end
  end
end
