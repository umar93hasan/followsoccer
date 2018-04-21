# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Followsoccer.Repo.insert!(%Followsoccer.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Followsoccer.Soccer.League
alias Followsoccer.Repo

Repo.insert! %League{
  lcode: 445,
  lname: "Premier League"
}
Repo.insert! %League{
  lcode: 450,
  lname: "French League 1"
}
Repo.insert! %League{
  lcode: 452,
  lname: "Bundesliga"
}
Repo.insert! %League{
  lcode: 456,
  lname: "Serie A"
}
Repo.insert! %League{
  lcode: 455,
  lname: "Primera Division"
}
