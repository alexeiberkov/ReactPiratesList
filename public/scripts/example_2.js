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
    <PirateProfile
                   temper="Очень мягкий"
                   description="Очень, очень хороший мальчик. Скромен, добр и правдив. Слушает маму и каждое утро делает зарядку."
                   />,

    document.getElementById('content'));
