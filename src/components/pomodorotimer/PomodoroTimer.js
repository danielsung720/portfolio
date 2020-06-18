import React, { Component } from 'react';
import '../../scss/pomodorotimer.scss';

class PomodoroTimer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            speed: 1000,
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
        this.changeSpeed = this.changeSpeed.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.key !== this.state.key && this.state.key === true) {
            this.workTimer = setInterval(this.countWorkingTime, this.state.speed);
            this.alphaTimer = setInterval(this.countAlphaTime, 100);
        }
    }

    countWorkingTime() {
        if(this.state.speed === Infinity) {
            this.setState({ key: false });
            clearInterval(this.workTimer);
            clearInterval(this.alphaTimer);
            return alert("請輸入正確速度")
        }

        this.setState({
            stateWord: 'Working...',
            seconds: this.state.seconds + 1,
            complete: this.state.complete + 0.067
        })

        if (this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1
            })
        }

        if (this.state.minutes >= 24) {
            this.setState({ stateWord: 'Finish...' })
        }

        if (this.state.minutes >= this.props.workingTime) {
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
            this.restTimer = setInterval(this.countRestTime, this.state.speed);
        }
    }

    countRestTime() {
        this.setState({
            stateWord: 'Resting...',
            seconds: this.state.seconds + 1,
            complete: this.state.complete + 0.34
        })

        if (this.state.seconds === 60) {
            this.setState({
                seconds: 0,
                minutes: this.state.minutes + 1
            })
        }

        if (this.state.minutes >= this.props.restingTime) {
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
        if (this.state.alphaKey === false) {
            this.setState({ alpha: this.state.alpha + 0.15 })
            if (this.state.alpha >= 1) {
                this.setState({ alphaKey: true })
            }
        } else if (this.state.alphaKey === true) {
            this.setState({ alpha: this.state.alpha - 0.15 })
            if (this.state.alpha <= 0) {
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
            alpha: 1,
            key: false
        })
        clearInterval(this.workTimer);
        clearInterval(this.alphaTimer);
        clearInterval(this.restTimer);
    }

    changeSpeed(e) {
        if(e.keyCode !== 37 && e.keyCode !== 39) {
            e.target.value = e.target.value.replace(/\D/g,'')
        }
        if (e.target.value > 1000 || e.target.value === "0") {
            e.target.value = 1;
            alert('請輸入正確數字');
        }
        this.setState({
            speed: 1000 / Number(e.target.value),
        })
    }


    render() {
        return (
            <div className="pomodoroTimerWrapper">
                <div className="container">
                    <div className="triangle01"></div>
                    <div className="title">
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
                    <div className="scheduleWrapper">
                        <div className="schedule">
                            <div className="text" style={{ color: `rgba(86, 86, 86, ${this.state.alpha})` }}>
                                {this.state.stateWord}
                            </div>
                            <div className="complete" style={{ width: `${this.state.complete}%` }}></div>
                        </div>
                    </div>
                    <div className="prompt">
                        There are {this.state.minutes} minutes {this.state.seconds} seconds elapsed.
                    </div>
                    <div className="ctrlBar">
                        <div>
                            <button onClick={this.handleClickStart}>START</button>
                        </div>
                        <div>
                            <button onClick={this.handleClickReset}>RESET</button>
                        </div>
                    </div>
                </div>
                <div className="testBar">
                    <div className="triangle04"></div>
                    <h3>測試調速</h3>
                    <input type="text" onChange={this.changeSpeed} defaultValue={this.state.speed / 1000} />倍
                    <p>*最高1000倍</p>
                </div>
            </div>
        )
    }
}

export default PomodoroTimer;