var PirateProfile = React.createClass({
    render: function () {
        return (
            <div className="panel panel-default">
                <div className="panel-heading"><h2>{this.props.fullName}</h2></div>
                <div className="panel-body">
                    <div className="media-left">
                        <img className="media-object" src={this.props.picture} alt={this.props.fullName}/>
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

ReactDOM.render(
    <PirateProfile fullName="Джим Хокинс"
                   temper="Очень мягкий"
                   description="Очень, очень хороший мальчик. Скромен, добр и правдив. Слушает маму и каждое утро делает зарядку."
                   picture="http://games.1c.ru/treasure_island/character/jim.jpg" />,

    document.getElementById('content'));
