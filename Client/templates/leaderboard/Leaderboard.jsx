/**
 * Port of the leaderboard example to use React for rendering.
 *
 * This directive is necessary to enable preprocessing of JSX tags:
 * @jsx React.DOM
 */

var cx = React.addons.classSet;

var Player = React.createClass({
    render: function () {
        var { name, score, ...rest } = this.props;
        return <div {...rest} className={cx("player", rest.className)}>
            <span className="name">{name}</span>
            <span className="score">{score}</span>
        </div>;
    }
});

var leaderboard = ReactMeteor.createClass({
    // Specifying a templateName property allows the component to be
    // interpolated into a Blaze template just like any other template:
    // {{> Leaderboard x=1 y=2}}. This corresponds to the JSX expression
    // <Leaderboard x={1} y={2} />.
    templateName: "leaderboard",

    startMeteorSubscriptions: function () {
        Meteor.subscribe("players");
    },

    getMeteorState: function () {
        var selectedPlayer = Players.findOne(Session.get("selected_player"));
        return {
            players: Players.find({}, {sort: {score: -1, name: 1}}).fetch(),
            selectedPlayer: selectedPlayer,
            selectedName: selectedPlayer && selectedPlayer.name
        };
    },

    addFivePoints: function () {
        Meteor.call("addPoints", Session.get("selected_player"), 5);
    },

    selectPlayer: function (id) {
        Session.set("selected_player", id);
    },

    renderPlayer: function (model) {
        var _id = this.state.selectedPlayer && this.state.selectedPlayer._id;

        return <Player
            key={model._id}
            name={model.name}
            score={model.score}
            className={model._id === _id ? "selected" : ""}
            onClick={this.selectPlayer.bind(this, model._id)}
            />;
    },

    render: function () {
        var children = [
            <div className="page-header">
                <h1>Welcome to Project Title</h1>
            </div>,
            <div className="template-leaderboard">
                { this.state.players.map(this.renderPlayer) }
            </div>
        ];


        if (this.state.selectedName) {
            children.push(
                <div className="details">
                    <div className="name">{this.state.selectedName}</div>
                    <input
                        type="button"
                        className="inc"
                        value="Give 5 points"
                        onClick={this.addFivePoints}
                        />
                </div>
            );

        } else {
            children.push(
                <div className="none">Click a player to select</div>
            );
        }

        return <div className="container">{ children }</div>;
    }
});