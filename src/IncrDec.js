import React, { Component } from 'react'

export default class IncrDec extends Component {
    constructor() {
        super();
        this.state = {
            num:0
        }
    }

    handleIncr = () => {
        this.setState({
            num : this.state.num + 1
        })

    }

    handleDec = () => {
        this.setState({
            num : this.state.num - 1
        })

    }
    render() {
        return (
            <div>
                <div onClick={this.handleIncr}>11+{this.state.num}</div>
                <div onClick={this.handleDec}>21+{this.state.num}</div>
            </div>
        )
    }
}
