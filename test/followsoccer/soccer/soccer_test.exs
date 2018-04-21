defmodule Followsoccer.SoccerTest do
  use Followsoccer.DataCase

  alias Followsoccer.Soccer

  describe "leagues" do
    alias Followsoccer.Soccer.League

    @valid_attrs %{lcode: 42, lname: "some lname"}
    @update_attrs %{lcode: 43, lname: "some updated lname"}
    @invalid_attrs %{lcode: nil, lname: nil}

    def league_fixture(attrs \\ %{}) do
      {:ok, league} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Soccer.create_league()

      league
    end

    test "list_leagues/0 returns all leagues" do
      league = league_fixture()
      assert Soccer.list_leagues() == [league]
    end

    test "get_league!/1 returns the league with given id" do
      league = league_fixture()
      assert Soccer.get_league!(league.id) == league
    end

    test "create_league/1 with valid data creates a league" do
      assert {:ok, %League{} = league} = Soccer.create_league(@valid_attrs)
      assert league.lcode == 42
      assert league.lname == "some lname"
    end

    test "create_league/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Soccer.create_league(@invalid_attrs)
    end

    test "update_league/2 with valid data updates the league" do
      league = league_fixture()
      assert {:ok, league} = Soccer.update_league(league, @update_attrs)
      assert %League{} = league
      assert league.lcode == 43
      assert league.lname == "some updated lname"
    end

    test "update_league/2 with invalid data returns error changeset" do
      league = league_fixture()
      assert {:error, %Ecto.Changeset{}} = Soccer.update_league(league, @invalid_attrs)
      assert league == Soccer.get_league!(league.id)
    end

    test "delete_league/1 deletes the league" do
      league = league_fixture()
      assert {:ok, %League{}} = Soccer.delete_league(league)
      assert_raise Ecto.NoResultsError, fn -> Soccer.get_league!(league.id) end
    end

    test "change_league/1 returns a league changeset" do
      league = league_fixture()
      assert %Ecto.Changeset{} = Soccer.change_league(league)
    end
  end
end
