defmodule Followsoccer.Repo.Migrations.CreateFollows do
  use Ecto.Migration

  def change do
    create table(:follows) do
      add :tcode, :integer, null: false
      add :tname, :string, null: false
      add :user_id, references(:users, on_delete: :delete_all), null: false

      timestamps()
    end

    create index(:follows, [:user_id])
  end
end
