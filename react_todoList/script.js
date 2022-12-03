var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var domContainer = document.querySelector('#root');
var root = ReactDOM.createRoot(domContainer);

var todos = [{
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
}, {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: true
}, {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
}, {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
}, {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
}];

var TitleList = function (_React$Component) {
    _inherits(TitleList, _React$Component);

    function TitleList() {
        _classCallCheck(this, TitleList);

        return _possibleConstructorReturn(this, (TitleList.__proto__ || Object.getPrototypeOf(TitleList)).apply(this, arguments));
    }

    _createClass(TitleList, [{
        key: "render",
        value: function render() {
            var text = this.props.text;

            return React.createElement(
                "h1",
                null,
                text
            );
        }
    }]);

    return TitleList;
}(React.Component);

;

var List = function (_React$Component2) {
    _inherits(List, _React$Component2);

    function List() {
        _classCallCheck(this, List);

        return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).apply(this, arguments));
    }

    _createClass(List, [{
        key: "render",
        value: function render() {
            var _props$arr = this.props.arr,
                arr = _props$arr === undefined ? [] : _props$arr;


            return arr.length ? React.createElement(
                "ul",
                null,
                " ",
                arr.map(function (el, index) {
                    return React.createElement(
                        "li",
                        { key: index },
                        el.title,
                        " ",
                        React.createElement(Button, { text: el.completed ? "Done" : "To-do" })
                    );
                })
            ) : null;
        }
    }]);

    return List;
}(React.Component);

;

var Button = function (_React$Component3) {
    _inherits(Button, _React$Component3);

    function Button() {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
    }

    _createClass(Button, [{
        key: "render",
        value: function render() {
            var text = this.props.text;

            var BtnStyle = { background: text === "Done" ? "green" : "yellow" };
            return React.createElement(
                "button",
                { style: BtnStyle },
                text
            );
        }
    }]);

    return Button;
}(React.Component);

var App = React.createElement(
    React.Fragment,
    null,
    React.createElement(TitleList, { text: "User to-do list" }),
    React.createElement(List, { arr: todos })
);

root.render(App);