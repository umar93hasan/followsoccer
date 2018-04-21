defmodule Followsoccer.Repo.Migrations.AddSubcription do
  use Ecto.Migration

  def change do
    alter table("follows") do
      add :subscribe, :boolean, null: false, default: false
    end
  end
end
