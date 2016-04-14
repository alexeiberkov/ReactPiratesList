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
        //1. Get prev. state
        var oldLikesCount = this.state.likesCount;

        //2. Increase it
        var newLikesCount = oldLikesCount + 1;

        //3. Set new value for `likesCount`
        //   ... we can not do it directly with this.likesCount = newLikesCount (!)
        //       because it will not trigger updates
        this.setState({
            likesCount: newLikesCount
        });
    }

});

ReactDOM.render(<LikeUnlikePanel />, document.getElementById('content'));
