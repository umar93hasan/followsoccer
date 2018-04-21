defmodule FollowsoccerWeb.FollowController do
  use FollowsoccerWeb, :controller

  alias Followsoccer.Team
  alias Followsoccer.Team.Follow

  action_fallback FollowsoccerWeb.FallbackController

  def index(conn, _params) do
    follows = Team.list_follows()
    render(conn, "index.json", follows: follows)
  end

  def create(conn, %{"follow" => follow_params}) do
    with {:ok, %Follow{} = follow} <- Team.create_follow(follow_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", follow_path(conn, :show, follow))
      |> render("show.json", follow: follow)
    end
  end

  def show(conn, %{"id" => id}) do
    follow = Team.get_follow!(id)
    render(conn, "show.json", follow: follow)
  end

  def update(conn, %{"id" => id, "follow" => follow_params}) do
    follow = Team.get_follow!(id)

    with {:ok, %Follow{} = follow} <- Team.update_follow(follow, follow_params) do
      render(conn, "show.json", follow: follow)
    end
  end

  def delete(conn, %{"id" => id}) do
    follow = Team.get_follow!(id)
    with {:ok, %Follow{}} <- Team.delete_follow(follow) do
      send_resp(conn, :no_content, "")
    end
  end
end
