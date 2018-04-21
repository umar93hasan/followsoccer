defmodule Followsoccer.Team.Follow do
  use Ecto.Schema
  import Ecto.Changeset


  schema "follows" do
    field :tcode, :integer
    field :tname, :string
    field :subscribe, :boolean
    #field :user_id, :id
    belongs_to :user, Followsoccer.Accounts.User

    timestamps()
  end

  @doc false
  def changeset(follow, attrs) do
    follow
    |> cast(attrs, [:tcode, :tname, :user_id, :subscribe])
    |> validate_required([:tcode, :tname, :user_id, :subscribe])
  end
end
