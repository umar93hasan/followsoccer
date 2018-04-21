defmodule FollowsoccerWeb.FollowView do
  use FollowsoccerWeb, :view
  alias FollowsoccerWeb.FollowView
  alias FollowsoccerWeb.UserView

  def render("index.json", %{follows: follows}) do
    %{data: render_many(follows, FollowView, "follow.json")}
  end

  def render("show.json", %{follow: follow}) do
    %{data: render_one(follow, FollowView, "follow.json")}
  end

  def render("follow.json", %{follow: follow}) do
    %{id: follow.id,
      tcode: follow.tcode,
      tname: follow.tname,
      subscribe: follow.subscribe,
      user_id: follow.user_id
    }
  end
end
