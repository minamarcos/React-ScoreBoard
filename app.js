const players = [
  {
    name: "mina",
    score: 250,
    id: 1
  },
  {
    name: "mary",
    score: 450,
    id: 2
  },
  {
    name: "sophia",
    score: 650,
    id: 3
  },
  {
    name: "tina",
    score: 50,
    id: 4
  }
];

const Header = props => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span className="stats">Players: {props.playersCount}</span>
    </header>
  );
};

const Player = prop => {
  return (
    <div className="player">
      <span className="player-name">{prop.playerName}</span>
      <Counter score={prop.countScore} />
    </div>
  );
};

const Counter = prop => {
  return (
    <div className="counter">
      <button className="counter-action decrement">-</button>
      <span className="counter-score">{prop.score}</span>
      <button className="counter-action increment">+</button>
    </div>
  );
};

const App = props => {
  return (
    <div className="scoreboard">
      <Header title="Scoreboard" playersCount={props.initPlayers.length} />
      {props.initPlayers.map(player => (
        <Player
          playerName={player.name}
          countScore={player.score}
          key={player.id.toString()}
        />
      ))}
    </div>
  );
};

ReactDOM.render(<App initPlayers={players} />, document.getElementById("root"));
