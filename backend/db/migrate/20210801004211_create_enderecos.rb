class CreateEnderecos < ActiveRecord::Migration[6.1]
  def change
    create_table :enderecos do |t|
      t.integer :cep
      t.string :endereco
      t.string :numero
      t.string :bairro
      t.string :cidade
      t.string :uf
      t.boolean :ativo

      t.timestamps
    end
  end
end
