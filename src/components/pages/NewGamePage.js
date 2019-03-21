import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startAddGame } from '../../actions/games';
import { history } from '../../routers/AppRouter';

export class NewGamePage extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      name: '',
      defaultName: 'Game 1',
      players: [
        this.props.auth.uid
      ],
      startedBy: this.props.auth.uid
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNameFocus = this.handleNameFocus.bind(this);
    this.handleNameBlur = this.handleNameBlur.bind(this);
    this.handleTogglePlayer = this.handleTogglePlayer.bind(this);
    this.createNewGame = this.createNewGame.bind(this);
  }

  componentDidMount() {
    this.setState({
      name: this.state.defaultName
    });
  }

  handleNameChange(event) {
    const name = event.target.value;
    this.setState(() => ({
      name
    }));
  }

  handleNameFocus(event) {
    if (event.target.value === this.state.defaultName) {
      this.setState({
        name: ''
      });
    }
  }

  handleNameBlur(event) {
    if (event.target.value.length === 0) {
      this.setState({
        name: this.state.defaultName
      });
    }
  }

  handleTogglePlayer(event) {
    const playerId = event.target.id;
    const index = this.state.players.indexOf(playerId);

    if (index === -1) {
      this.setState({ players: [...this.state.players, playerId] });
    } else {
      const newPlayers = [... this.state.players];
      newPlayers.splice(index, 1);
      this.setState({ players: newPlayers });
    }
  }

  createNewGame = () => {
    this.props.startAddGame({ ...this.state }).then((response) => {
      history.push(`/play/${response.game.id}`);
    });
  };

  render() {
    return (
      <div>
        <div className="content content--dark">
          <form className="form">
            <div className="input-field">
              <h3>Apocalypse Name</h3>
              <input
                className="input-text"
                placeholder="Name your Apocalypse..."
                onFocus={this.handleNameFocus}
                onBlur={this.handleNameBlur}
                onChange={this.handleNameChange}
                value={this.state.name} />
            </div>
            <div className="input-group">
              <h3>Choose your Challengers!</h3>
              {
                this.props.players.filter(player => player.id !== this.props.auth.uid).map((player) => {
                  return (
                    <div className="label-check" key={player.id}>
                      <input type="checkbox" id={player.id} onChange={this.handleTogglePlayer} />
                      <label htmlFor={player.id} className="player-select">
                        {player.displayName}
                      </label>
                    </div>
                  )
                })
              }
            </div>
          </form>
        </div>
        <div className="call-to-action">
          <button className="button button--primary" onClick={this.createNewGame}>
            Let the Game Begin!
          </button>
        </div>
        <div className="back">
          <Link to="/menu" className="button button--secondary">
            Back to Main Menu
          </Link>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
    players: state.players,
    options: state.options
  };
};

const mapDispatchToProps = (dispatch) => ({
  startAddGame: (game) => dispatch(startAddGame(game))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGamePage);
