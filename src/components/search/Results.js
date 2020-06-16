import React, { Component } from 'react';
import Result from './Result';

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resNum: 20
        }
        this.sortData = this.sortData.bind(this);
    }

    sortData(a, b) {
        let item1 = a['調查年'].replace('年', '');
        let item2 = b['調查年'].replace('年', '');
        if (Number(item1) === Number(item2)) return 0;
        if (this.props.sort === 'desc') {
            return (Number(item1) > Number(item2) ? -1 : 1)
        } else {
            return (Number(item1) <
                Number(item2) ? -1 : 1)
        }

    }

    componentDidMount = () => {
        window.addEventListener('scroll', () => {
            let currentY = window.scrollY;
            let currentWindowY = document.documentElement.clientHeight;
            let documentY = document.body.scrollHeight;

            if (currentY + currentWindowY >= documentY - 50) {
                this.setState({
                    resNum: this.state.resNum + 20,
                })
            }
        })
    }


    render() {
        let datum = Array.from(this.props.datum);
        datum.sort(this.sortData);
        let updateResult = datum.filter((item) => {
            if (this.props.category === '全部') {
                return item['統計調查名稱'].toLowerCase().indexOf(this.props.keyWord) !== -1 || item['調查年'].toLowerCase().indexOf(this.props.keyWord) !== -1;
            } else {
                return item['統計調查名稱'].toLowerCase().indexOf(this.props.category) !== -1 
                        && (item['統計調查名稱'].toLowerCase().indexOf(this.props.keyWord) !== -1 || item['調查年'].toLowerCase().indexOf(this.props.keyWord) !== -1);
            }
        })
        let sliceResult = updateResult.slice(0, this.state.resNum);

        return (
            <div className="results">
                {sliceResult.map((item, i) => {
                    return (
                        <Result
                            key={i}
                            year={item['調查年']}
                            name={item['統計調查名稱']}
                            description={item['調查內容簡介']}
                            url={item['網址']}
                            period={item['調查週期']}
                        />
                    )
                })}
            </div>
        )
    }
}

export default Results;