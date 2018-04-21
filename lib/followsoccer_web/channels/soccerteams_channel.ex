defmodule FollowsoccerWeb.SoccerteamsChannel do
  use FollowsoccerWeb, :channel

  def join("soccerteams:"<>name, payload, socket) do
    if authorized?(payload) do
      if(Followsoccer.ChatBackup.load(name)) do
        chat = Followsoccer.ChatBackup.load(name)
        if (name=="0") do
          chat=[]
        end
        IO.inspect "load chat on join::"
        IO.inspect chat
      else
        chat=[]
        IO.inspect "new chat on join::"
        IO.inspect chat
      end
      Followsoccer.ChatBackup.save(name, chat)
      socket = socket
      |> assign(:chat, chat)
      |> assign(:name, name)
      IO.inspect socket
      {:ok, %{"join" => name, "chat" => chat}, socket}
    else
      {:error, %{reason: "unauthorized"}}
    end
  end

  # Channels can be used in a request/response fashion
  # by sending replies to requests from the client
  def handle_in("ping", payload, socket) do
    {:reply, {:ok, payload}, socket}
  end

  # It is also common to receive messages from the client and
  # broadcast to everyone in the current topic (soccerteams:lobby).
  def handle_in("shout", payload, socket) do
    broadcast socket, "shout", payload
    {:noreply, socket}
  end

  def handle_in("sendMessage", param, socket) do
    IO.inspect "in sendMsg"
    IO.inspect param
    IO.inspect socket
    name = socket.assigns[:name]
    msg=param
    chat = Followsoccer.ChatBackup.load(name)
    chat = chat ++ [msg]
    Followsoccer.ChatBackup.save(name, chat)
    socket = assign(socket, :chat, chat)
    broadcast socket, "message", %{"chat" => chat}
    {:noreply, socket}
  end


  # Add authorization logic here as required.
  defp authorized?(_payload) do
    true
  end
end
