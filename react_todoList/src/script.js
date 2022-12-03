const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

let todos = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: true,
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false,
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: true,
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false,
    }
];

class TitleList extends React.Component {
    render() {
        const { text } = this.props;
        return <h1>{text}</h1>
    }
};

class List extends React.Component {
    render() {
        const { arr = [] } = this.props;

        return arr.length ? <ul> {arr.map((el, index) =>
            <li key={index}>{el.title} <Button text={el.completed ? `Done` : `To-do`} /></li>)}
        </ul>
            : null;
    }
};

class Button extends React.Component {
    render() {
        const { text } = this.props;
        let BtnStyle = { background: text === `Done` ? `green` : `yellow` };
        return <button style={BtnStyle}>{text}</button>
    }
}

const App = <React.Fragment>
    <TitleList text={`User to-do list`} />
    <List arr={todos} />
</React.Fragment>

root.render(App);