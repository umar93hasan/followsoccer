defmodule FollowsoccerWeb.FollowControllerTest do
  use FollowsoccerWeb.ConnCase

  alias Followsoccer.Team
  alias Followsoccer.Team.Follow

  @create_attrs %{tcode: 42, tname: "some tname"}
  @update_attrs %{tcode: 43, tname: "some updated tname"}
  @invalid_attrs %{tcode: nil, tname: nil}

  def fixture(:follow) do
    {:ok, follow} = Team.create_follow(@create_attrs)
    follow
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all follows", %{conn: conn} do
      conn = get conn, follow_path(conn, :index)
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create follow" do
    test "renders follow when data is valid", %{conn: conn} do
      conn = post conn, follow_path(conn, :create), follow: @create_attrs
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get conn, follow_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "tcode" => 42,
        "tname" => "some tname"}
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post conn, follow_path(conn, :create), follow: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update follow" do
    setup [:create_follow]

    test "renders follow when data is valid", %{conn: conn, follow: %Follow{id: id} = follow} do
      conn = put conn, follow_path(conn, :update, follow), follow: @update_attrs
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get conn, follow_path(conn, :show, id)
      assert json_response(conn, 200)["data"] == %{
        "id" => id,
        "tcode" => 43,
        "tname" => "some updated tname"}
    end

    test "renders errors when data is invalid", %{conn: conn, follow: follow} do
      conn = put conn, follow_path(conn, :update, follow), follow: @invalid_attrs
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete follow" do
    setup [:create_follow]

    test "deletes chosen follow", %{conn: conn, follow: follow} do
      conn = delete conn, follow_path(conn, :delete, follow)
      assert response(conn, 204)
      assert_error_sent 404, fn ->
        get conn, follow_path(conn, :show, follow)
      end
    end
  end

  defp create_follow(_) do
    follow = fixture(:follow)
    {:ok, follow: follow}
  end
end
