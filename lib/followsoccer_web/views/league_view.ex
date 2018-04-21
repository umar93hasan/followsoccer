defmodule FollowsoccerWeb.LeagueView do
  use FollowsoccerWeb, :view
  alias FollowsoccerWeb.LeagueView

  def render("index.json", %{leagues: leagues}) do
    %{data: render_many(leagues, LeagueView, "league.json")}
  end

  def render("show.json", %{league: league}) do
    %{data: render_one(league, LeagueView, "league.json")}
  end

  def render("league.json", %{league: league}) do
    %{id: league.id,
      lname: league.lname,
      lcode: league.lcode}
  end
end
