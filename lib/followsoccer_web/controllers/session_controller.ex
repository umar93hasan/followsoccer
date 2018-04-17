defmodule FollowsoccerWeb.SessionController do
  use FollowsoccerWeb, :controller

  alias Followsoccer.Accounts
  alias Followsoccer.Accounts.User

  def create(conn, %{"email" => email, "password" => password}) do
    #user = Accounts.get_user_by_email(email)
    user = get_and_auth_user(email, password)

    if user do      
      conn
      |> put_session(:user_id, user.id)
      |> put_flash(:info, "Welcome #{user.name}")
      |> redirect(to: page_path(conn, :feed))
    else
      conn
      |> put_flash(:error, "User not found. Please register if you are a new user.")
      |> redirect(to: page_path(conn, :index))
    end
  end

  def delete(conn, _params) do
    conn
    |> delete_session(:user_id)
    |> put_flash(:info, "Logged out")
    |> redirect(to: page_path(conn, :index))
  end

  # TODO: Move to user.ex
  def get_and_auth_user(email, password) do
    IO.inspect email
    IO.inspect password
    user = Accounts.get_user_by_email(email)
    case Comeonin.Argon2.check_pass(user, password) do
      {:ok, user} -> user
      _else       -> nil
    end
  end

end
