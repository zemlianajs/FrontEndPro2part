import React, { Component } from 'react';
import "./style.sass";

export class List extends Component {
    render() {
        const { list, actions } = this.props;

        return (
            <div className='list'>
                <ul>
                    {list.map((el) => (
                        <li key={el.id}>{el.title}</li>
                    ))}
                </ul>
                <div>
                    {actions.map((el, index) => (
                        list.length ?
                            <button className='btn' key={index} onClick={el.action}>
                                {el.text}
                            </button>
                            : undefined
                    ))}
                </div>
            </div>
        );
    }
}

export default List