const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);

const animals = [
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` }
];

const random = (min, max) => Math.floor(Math.random() * (max - min) + min);

class List extends React.Component {
    constructor(props) {
        super(props);

        let notSelectedIndex = this.state.list.map((el, index) => index);

        const selectElement = setInterval(() => {
            let randomIndex = random(0, notSelectedIndex.length);
            let randomItemByIndex = notSelectedIndex[randomIndex];
            notSelectedIndex.splice(randomIndex, 1);

            this.setState({
                selectedItems: this.state.selectedItems.concat(randomItemByIndex),
            }, () => {
                if (this.state.selectedItems.length === Math.ceil(this.state.list.length / 2)) {
                    this.setState({
                        border: `10px solid green`
                    })
                }
                if (!notSelectedIndex.length) {
                    clearInterval(selectElement)
                    this.setState({
                        border: `20px solid green`
                    })
                }
            })
        }, 2000)
    }
    state = {
        list: this.props.list,
        border: `1px solid black`,
        selectedItems: [],
    };

    render() {
        const { list, border, selectedItems } = this.state;

        return <table style={{ border: border }}>
            <tbody>
                {
                    list.map((el, index) => <tr
                        className={selectedItems.indexOf(index) !== -1 ? `selected` : undefined}
                        key={index}>
                        {Object.keys(el).map((key, index) => <td key={index}>{el[key]}</td>)}
                    </tr>)
                }
            </tbody>
        </table>
    }
}

const App = () => {
    return (
        <React.Fragment>
            <List list={animals} />
        </React.Fragment>
    );
};

root.render(<App />);