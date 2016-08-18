import React from 'react';

var Counter = React.createClass({

    getInitialState: function() {
        return {
            count: 5
        }
    },

    componentDidMount: function() {

        var count = 4;
        var _this = this;
        _this.setState({count: count});

    },

    render: function() {
        return (
            <span>
                LALALA!!! {this.state.count}
            </span>
        );
    }

});

export default Counter;