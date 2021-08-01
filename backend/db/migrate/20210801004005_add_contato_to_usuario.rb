class AddContatoToUsuario < ActiveRecord::Migration[6.1]
  def change
    add_reference :usuarios, :contato, null: false, foreign_key: true
  end
end
