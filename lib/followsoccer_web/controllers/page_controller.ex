defmodule FollowsoccerWeb.PageController do
  use FollowsoccerWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
