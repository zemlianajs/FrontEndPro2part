import React, { Component, Fragment } from 'react';
import List from '../List';
import './style.sass'

export class ToDo extends Component {
    constructor(props){
        super(props);

        this.transferToSecond = this.transferToSecond.bind(this);
        this.transferToFirst = this.transferToFirst.bind(this);
        this.transferToThird = this.transferToThird.bind(this);
        this.removeLastItem = this.removeLastItem.bind(this);
    }

    state = {
        firstList: this.props.list,
        secondList: [],
        thirdList: []
    }

    transferToSecond() {
        const { firstList, secondList } = this.state
        this.setState({
            firstList: firstList.filter((el, index) => index !== 0),
            secondList: [firstList[0], ...secondList],
        })
    }

    transferToFirst() {
        const { firstList, secondList } = this.state
        this.setState({
            firstList: [secondList[0], ...firstList],
            secondList: secondList.filter((el, index) => index !== 0)
        })
    }

    transferToThird() {
        const { secondList, thirdList } = this.state
        this.setState({
            secondList: secondList.filter((el, index) => index !== 0),
            thirdList: [secondList[0], ...thirdList]
        })
    }

    removeLastItem() {
        const { thirdList } = this.state
        this.setState({
            thirdList: thirdList.slice(0, -1)
        })
    }

    render() {
        const { firstList, secondList, thirdList } = this.state
        return <section className='section'>
            <List
                list={firstList}
                actions={
                    [
                        { text: "Transfer first to right", action: this.transferToSecond }
                    ]
                } />
            <List 
            list={secondList}
            actions = {
                [
                   {text: "Transfer first to left", action: this.transferToFirst},
                   {text: "Transfer first to right", action: this.transferToThird}
                ]
             }/>
            <List 
            list={thirdList}
            actions = {
                [
                   {text: "Remove last item", action: this.removeLastItem}
                ]
             }/>
        </section>
    }
}

export default ToDo;