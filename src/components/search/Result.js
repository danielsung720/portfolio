import React, { Component } from 'react';

class Result extends Component {
    render() {
        return (
            <div className="in-stock">
                <h2>{this.props.year} {this.props.name}</h2>
                <div className="link">
                    <a href={this.props.url}>資訊連結</a>
                </div>
                <p>說明: {this.props.description}(更新週期: {this.props.period})</p>
            </div>
        )
    }
}

export default Result;