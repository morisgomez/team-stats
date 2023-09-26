let team = {
  //populating data:
  _players: [//nested objects in array.
    {firstName: "pedri", lastName: "lopez", age: 20},
    {firstName: "gavi", lastName: "paez", age: 19},
    {firstName: "ansu", lastName: "fati", age: 20}
  ],
  _games: [//nested objects in array.
    {opponent: "girona", teamPoints: 3, opponentPoints: 1},
    {opponent: "madrid", teamPoints: 3, opponentPoints: 3},
    {opponent: "betis", teamPoints: 1, opponentPoints: 2},
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge){
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge
    };
    this.players.push(player);//confused on how get players actually pushes object.
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints){
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };
    this.games.push(game);//connfused on how get games actually pushes object.
  }
};//closes team object.

//adds new player bugs bunny:
team.addPlayer("bugs", "bunny",  76);
console.log(team._players);

//adds new game titans:
team.addGame("titans", 100, 98);
console.log(team._games);
