var LikeUnlikePanel = React.createClass({

    getInitialState: function () {
        return {
            likesCount: 0
        }
    },

    render: function () {
        return (
            <div>
                <button type="button" className="btn btn-default" onClick={this.onButtonLikeClick}>
                    <span className="glyphicon glyphicon-thumbs-up" ></span>
                    <span className="badge">{this.state.likesCount}</span>
                </button>
            </div>
        );
    },

    onButtonLikeClick: function () {
        var oldLikesCount = this.state.likesCount;
        var newLikesCount = oldLikesCount + 1;
        this.setState({
            likesCount: newLikesCount
        });
    }

});

var PirateProfile = React.createClass({

    propTypes: {
        fullName: React.PropTypes.string.isRequired,
        picture: React.PropTypes.string.isRequired,
        temper: React.PropTypes.string,
        description: React.PropTypes.string
    },

    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h2>{this.props.fullName}</h2></div>
                <div className="panel-body">
                    <div className="media-left">
                        <img className="media-object" src={this.props.picture} alt={this.props.fullName}/>
                        <LikeUnlikePanel />
                    </div>
                    <div className="media-body">
                        <h3>Характер:</h3> {this.props.temper}
                        <h3>Описание:</h3> {this.props.description}
                    </div>
                </div>
            </div>
        );
    }
});

var PiratesList = React.createClass({
    render: function () {
        return (
            <div>
                <PirateProfile fullName="Джим Хокинс"
                               temper="Очень мягкий"
                               description="Очень, очень хороший мальчик. Скромен, добр и правдив. Слушает маму и каждое утро делает зарядку."
                               picture="http://games.1c.ru/treasure_island/character/jim.jpg" />

                <PirateProfile fullName="Джони"
                               temper="Опасен, неуклюж, глуп."
                               description="Среднестатистический бандит, каких много."
                               picture="http://games.1c.ru/treasure_island/character/cutthroat.jpg" />

                <PirateProfile fullName="Капитан Смоллет"
                               temper="Характер прескверный."
                               description="Говорит правду в глаза, отчего вынужден хорошо владеть саблей."
                               picture="http://games.1c.ru/treasure_island/character/captain.jpg" />
            </div>
        );
    }
});

ReactDOM.render(
    <PiratesList />,

    document.getElementById('content'));
