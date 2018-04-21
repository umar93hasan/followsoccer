defmodule Followsoccer.TeamTest do
  use Followsoccer.DataCase

  alias Followsoccer.Team

  describe "follows" do
    alias Followsoccer.Team.Follow

    @valid_attrs %{tcode: 42, tname: "some tname"}
    @update_attrs %{tcode: 43, tname: "some updated tname"}
    @invalid_attrs %{tcode: nil, tname: nil}

    def follow_fixture(attrs \\ %{}) do
      {:ok, follow} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Team.create_follow()

      follow
    end

    test "list_follows/0 returns all follows" do
      follow = follow_fixture()
      assert Team.list_follows() == [follow]
    end

    test "get_follow!/1 returns the follow with given id" do
      follow = follow_fixture()
      assert Team.get_follow!(follow.id) == follow
    end

    test "create_follow/1 with valid data creates a follow" do
      assert {:ok, %Follow{} = follow} = Team.create_follow(@valid_attrs)
      assert follow.tcode == 42
      assert follow.tname == "some tname"
    end

    test "create_follow/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Team.create_follow(@invalid_attrs)
    end

    test "update_follow/2 with valid data updates the follow" do
      follow = follow_fixture()
      assert {:ok, follow} = Team.update_follow(follow, @update_attrs)
      assert %Follow{} = follow
      assert follow.tcode == 43
      assert follow.tname == "some updated tname"
    end

    test "update_follow/2 with invalid data returns error changeset" do
      follow = follow_fixture()
      assert {:error, %Ecto.Changeset{}} = Team.update_follow(follow, @invalid_attrs)
      assert follow == Team.get_follow!(follow.id)
    end

    test "delete_follow/1 deletes the follow" do
      follow = follow_fixture()
      assert {:ok, %Follow{}} = Team.delete_follow(follow)
      assert_raise Ecto.NoResultsError, fn -> Team.get_follow!(follow.id) end
    end

    test "change_follow/1 returns a follow changeset" do
      follow = follow_fixture()
      assert %Ecto.Changeset{} = Team.change_follow(follow)
    end
  end
end
