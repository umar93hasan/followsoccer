defmodule FollowsoccerWeb.Router do
  use FollowsoccerWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :get_current_user
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  def get_current_user(conn, _params) do
    # TODO: Move this function out of the router module.
    user_id = get_session(conn, :user_id)
    user = Followsoccer.Accounts.get_user(user_id || -1)
    IO.inspect "in get cur user"
    IO.inspect user
    assign(conn, :current_user, user)
  end

  scope "/", FollowsoccerWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    post "/session", SessionController, :create
    delete "/session", SessionController, :delete
    resources "/users", UserController
    get "/feed", PageController, :feed
  end

  # Other scopes may use custom stacks.
  scope "/api/v1", FollowsoccerWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
  end
end
