class CreateInitialSchema < ActiveRecord::Migration[5.0]
  def change
    create_table "messages", force: :cascade do |t|
      t.text     "content"
      t.integer  "user_id"
      t.datetime "created_at", null: false
      t.datetime "updated_at", null: false
      t.index ["user_id"], name: "index_messages_on_user_id"
    end

    create_table "users", force: :cascade do |t|
      t.string   "username"
      t.string   "password_digest"
      t.datetime "created_at",      null: false
      t.datetime "updated_at",      null: false
      t.index ["username"], name: "index_users_on_username", unique: true
    end
  end
end
