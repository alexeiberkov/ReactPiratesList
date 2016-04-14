var data = [
    "Джим Хокинс", "Доктор Ливси", "Сквайр Трелони", "Капитан Смоллетт", "Билли Бонс", "Джон Сильвер", "Чёрный Пёс", "Слепой Пью", "Бен Ганн"
];

var PiratesList = React.createClass({

    getDefaultProps: function () {
        return {
            interval: 1000
        }
    },

    getInitialState: function () {
        return {
            selectedArrayItem: -1
        }
    },

    componentDidMount: function () {
        var self = this, randomNumber;

        setInterval(function () {
            randomNumber = self.randomIntFromInterval();
            self.setState({selectedArrayItem: randomNumber});
        }, this.props.interval);
    },

    render: function () {
        var heroes = this.getHeroesContent();

        return (<div>{heroes}</div>);
    },

    getHeroesContent: function () {
        var key = 0, className;

        var heroes = data.map(function (hero) {
            className = (this.state.selectedArrayItem == key) ? 'label label-warning selectedDiv' : 'label label-default';
            key = key + 1;

            return (<div className={className} key={key}>{hero}</div>);
        }, this);

        return heroes;
    },

    randomIntFromInterval: function () {
        var min = 0;
        var max = data.length - 1;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
});




ReactDOM.render(
    <PirateProfile picture={""} pirate={""}/>,
    document.getElementById('content')
);
