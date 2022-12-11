var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var animals = [{ type: 'turtle', icon: '\uD83D\uDC22' }, { type: 'octopus', icon: '\uD83D\uDC19' }, { type: 'fish', icon: '\uD83D\uDC20' }, { type: 'flamingo', icon: '\uD83E\uDDA9' }, { type: 'penguin', icon: '\uD83D\uDC27' }];

var random = function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
};

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            list: _this.props.list,
            border: '1px solid black',
            selectedItems: []
        };


        var notSelectedIndex = _this.state.list.map(function (el, index) {
            return index;
        });

        var selectElement = setInterval(function () {
            var randomIndex = random(0, notSelectedIndex.length);
            var randomItemByIndex = notSelectedIndex[randomIndex];
            notSelectedIndex.splice(randomIndex, 1);

            _this.setState({
                selectedItems: _this.state.selectedItems.concat(randomItemByIndex)
            }, function () {
                if (_this.state.selectedItems.length === Math.ceil(_this.state.list.length / 2)) {
                    _this.setState({
                        border: '10px solid green'
                    });
                }
                if (!notSelectedIndex.length) {
                    clearInterval(selectElement);
                    _this.setState({
                        border: '20px solid green'
                    });
                }
            });
        }, 2000);
        return _this;
    }

    _createClass(List, [{
        key: 'render',
        value: function render() {
            var _state = this.state,
                list = _state.list,
                border = _state.border,
                selectedItems = _state.selectedItems;


            return React.createElement(
                'table',
                { style: { border: border } },
                React.createElement(
                    'tbody',
                    null,
                    list.map(function (el, index) {
                        return React.createElement(
                            'tr',
                            {
                                className: selectedItems.indexOf(index) !== -1 ? 'selected' : undefined,
                                key: index },
                            Object.keys(el).map(function (key, index) {
                                return React.createElement(
                                    'td',
                                    { key: index },
                                    el[key]
                                );
                            })
                        );
                    })
                )
            );
        }
    }]);

    return List;
}(React.Component);

var App = function App() {
    return React.createElement(
        React.Fragment,
        null,
        React.createElement(List, { list: animals })
    );
};

root.render(React.createElement(App, null));