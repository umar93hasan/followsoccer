defmodule Followsoccer.Soccer.League do
  use Ecto.Schema
  import Ecto.Changeset


  schema "leagues" do
    field :lcode, :integer
    field :lname, :string

    timestamps()
  end

  @doc false
  def changeset(league, attrs) do
    league
    |> cast(attrs, [:lname, :lcode])
    |> validate_required([:lname, :lcode])
  end
end
