import React, { Component } from 'react'
// import Circle from './Circle';


export default class Text extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div>
                {this.props.def}
            </div>
        )
    }
}
