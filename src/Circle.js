import React, { Component } from 'react'
// import Text from './Text';

export default class Circle extends Component {
    render() {
        return (
            <div>
                <div>
                    <h1 onMouseEnter={this.props.handleonEnter} onMouseLeave={this.props.handleonLeave}>Hey</h1>
                </div>
                {/* {this.props.abc} */}
            </div>
        )
    }
}