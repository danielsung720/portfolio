import React, { Component } from 'react';
import '../../scss/pomodoroTimer.scss';

class PomodoroTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seconds: 0,
            minutes: 0,
            complete: 0,
            alpha: 0,
            alphaKey: false,
            stateWord: 'Working...',
            key: false,
        }
        this.countWorkingTime = this.countWorkingTime.bind(this);
        this.countRestTime = this.countRestTime.bind(this);
        this.countAlphaTime = this.countAlphaTime.bind(this);
        this.handleClickStart = this.handleClickStart.bind(this);
        this.handleClickReset = this.handleClickReset.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.key !== this.state.key && this.state.key === true) {
            this.workTimer = setInterval(this.countWorkingTime, 1000);
            this.alphaTimer = setInterval(this.countAlphaTime, 100);
        }
    }

    countWorkingTime() {
        this.setState({
            stateWord: 'Working...',
            seconds: this.state.seconds + 1,
            complete: this.state.complete + 0.067
        })

        if(this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1
            })
        }

        if(this.state.minutes >= 24) {
            this.setState({ stateWord: 'Finish...' })
        }

        if(this.state.minutes >= this.props.workingTime) {
            clearInterval(this.workTimer);
            this.setState({
                seconds: 0,
                minutes: 0,
                complete: 0,
                stateWord: 'Done',
                alpha: 1,
                key: false,
            });
            alert('Time up for a break!!');
            this.restTimer = setInterval(this.countRestTime, 1000);
        }
    }

    countRestTime() {
        this.setState({
            stateWord: 'Resting...',
            seconds: this.state.seconds + 1,
            complete: this.state.complete + 0.34
        })

        if(this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1
            })
        }

        if(this.state.minutes >= this.props.restingTime) {
            clearInterval(this.restTimer);
            clearInterval(this.alphaTimer);
            this.setState({
                seconds: 0,
                minutes: 0,
                complete: 0,
                stateWord: 'Over',
                alpha: 1,
                key: false,
            });
            alert('Resting Over!!');
        }
    }

    countAlphaTime() {
        if(this.state.alphaKey === false) {
            this.setState({ alpha: this.state.alpha + 0.15})
            if(this.state.alpha >= 1) {
                this.setState({ alphaKey: true })
            }
        } else if (this.state.alphaKey === true) {
            this.setState({ alpha: this.state.alpha - 0.15})
            if(this.state.alpha <= 0) {
                this.setState({ alphaKey: false })
            }
        }
    }


    handleClickStart() {
        this.setState({ key: true });
    }

    handleClickReset() {
        this.setState({
            seconds: 0,
            minutes: 0,
            complete: 0,
            stateWord: 'Over',
            key: false
        })
        clearInterval(this.workTimer);
        clearInterval(this.alphaTimer);
        clearInterval(this.restTimer);
    }


    render() {
        return(
            <div id="pomodoroTimerWrapper">
                <div id="container">
                    <div id="triangle01"></div>
                    <div id="triangle02"></div>
                    <div id="triangle03"></div>
                    <div id="title">
                        <h1>PomodoroTimer</h1>
                        <h4>
                            For a total time of <span>{this.props.workingTime + this.props.restingTime}</span> minutes. 
                        </h4>
                        <h4>
                            This timer runs for <span>{this.props.workingTime}</span> minutes
                        </h4>
                        <h4>
                            followed by rest of <span>{this.props.restingTime}</span> minutes.
                        </h4>
                    </div>
                    <div id="scheduleWrapper">
                        <div id="schedule">
                            <div id="text" style={{color: `rgba(86, 86, 86, ${this.state.alpha})`}}>
                                {this.state.stateWord}
                            </div>
                            <div id="complete" style={{width: `${this.state.complete}%`}}></div>
                        </div>
                    </div>
                    <div id="prompt">
                        There are {this.state.minutes} minutes {this.state.seconds} seconds elapsed.
                    </div>
                    <div id="ctrlBar">
                        <div>
                            <button onClick={this.handleClickStart}>START</button>
                        </div>
                        <div>
                            <button onClick={this.handleClickReset}>RESET</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PomodoroTimer;