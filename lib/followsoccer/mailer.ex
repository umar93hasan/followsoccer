defmodule Followsoccer.Mailer do
  use Mailgun.Client,
      domain: Application.get_env(:followsoccer, :mailgun_domain),
      key: Application.get_env(:followsoccer, :mailgun_key)


    def send_welcome_text_email(email_address) do
      send_email to: email_address,
                 from: "FollowSoccer@fs.com",
                 subject: "Welcome!",
                 text: "Welcome to FollowSoccer! Follow your favourite soccer teams. Stay updated on the latest results. Chat with other fans! Have fun."
    end
end
