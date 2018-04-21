defmodule Followsoccer.Repo.Migrations.CreateLeagues do
  use Ecto.Migration

  def change do
    create table(:leagues) do
      add :lname, :string, null: false
      add :lcode, :integer, null: false

      timestamps()
    end

  end
end
