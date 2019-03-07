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
      <span className="player-name">
        <button
          className="remove-player"
          onClick={() => prop.removePlayer(prop.id)}
        >
          X
        </button>
        {prop.playerName}
      </span>
      <Counter score={prop.countScore} />
    </div>
  );
};

class Counter extends React.Component {
  incrementScore = () => {
    console.log(this);
    this.setState(prevState => {
      return {
        score: prevState.score + 1
      };
    });
  };
  decrementScore = () => {
    console.log(this);
    this.state.score > 0
      ? this.setState({ score: this.state.score - 1 })
      : this.setState({ score: 0 });
  };
  state = {
    score: 14
  };
  render() {
    return (
      <div className="counter">
        <button
          className="counter-action decrement"
          onClick={this.decrementScore}
        >
          -
        </button>
        <span className="counter-score">{this.state.score}</span>
        <button
          className="counter-action increment"
          onClick={this.incrementScore}
        >
          +
        </button>
      </div>
    );
  }
}

class App extends React.Component {
  state = {
    players: [
      {
        name: "mina",
        id: 1
      },
      {
        name: "mary",
        id: 2
      },
      {
        name: "sophia",
        id: 3
      },
      {
        name: "tina",
        id: 4
      }
    ]
  };
  removePlayer = id => {
    this.setState(prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  };
  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" playersCount={this.state.players.length} />
        {this.state.players.map(player => (
          <Player
            playerName={player.name}
            key={player.id.toString()}
            id={player.id}
            removePlayer={this.removePlayer}
          />
        ))}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
