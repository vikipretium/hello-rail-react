class CreateMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :messages do |t|
      t.string :message
      t.timestamps
    end
      Message.create(message:'Greeting 1')
      Message.create(message:'Greeting 2')
      Message.create(message:'Greeting 3')
      Message.create(message:'Greeting 4')
      Message.create(message:'Greeting 5')
  end
end
