defmodule FollowsoccerWeb.PageController do
  use FollowsoccerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end

  def feed(conn, _params) do
    myTeams = Followsoccer.Team.list_teams_of_user(conn.assigns.current_user.id)
    render conn, "feed.html", myTeams: myTeams
  end

  def soccerteams(conn, params) do
      render conn, "soccerteams.html", soccerteams: params["soccerteams"]
  end
end
