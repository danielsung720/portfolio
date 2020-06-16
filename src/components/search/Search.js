import React, { Component } from 'react';
import '../../scss/search.scss'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryData: [
                '請選擇分類', '薪資', '工時', '青年', '育嬰', '外籍', '平等', '障礙者',
                '人力需求', '職業訓練', '就業狀況', '失業給付', '職業災害'
            ]
        }
    }
    render() {
        return (
            <div className="search-bar">
                <input
                    placeholder="查詢標題名稱"
                    onChange={this.props.onQuery}
                />

                <select onChange={this.props.onCategory}>
                    {this.state.categoryData.map((item, i) => {
                        return <option key={i}>{item}</option>
                    })}
                </select>

                <select onChange={this.props.onSort}>
                    <option value='desc'>時間由近至遠</option>
                    <option value='asc'>時間由遠至近</option>
                </select>
            </div>
        )
    }
}

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
            if (this.props.category === '請選擇分類') {
                return item['統計調查名稱'].toLowerCase().indexOf(this.props.keyWord) !== -1;
            } else {
                return item['統計調查名稱'].toLowerCase().indexOf(this.props.category) !== -1 && item['統計調查名稱'].toLowerCase().indexOf(this.props.keyWord) !== -1;
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


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datum: '',
            keyWord: '',
            category: '請選擇分類',
            sort: 'desc'
        }
        this.handleKeyWord = this.handleKeyWord.bind(this);
        this.handleSort = this.handleSort.bind(this);
        this.handleCategory = this.handleCategory.bind(this)
    }

    handleKeyWord(e) {
        this.setState({
            keyWord: e.target.value.toLowerCase().trim()
        })
    }

    handleSort(e) {
        this.setState({
            sort: e.target.value
        })
    }

    handleCategory(e) {
        this.setState({
            category: e.target.value,
        })
    }

    componentDidMount = async () => {
        const url = 'https://apiservice.mol.gov.tw/OdService/rest/datastore/A17000000J-020064-VvB';
        fetch(url, { method: 'GET' })
            .then(res => {
                return res.json();
            })
            .then(apiData => {
                let toArrData = Array.from(apiData.result.records);
                let notNullData = toArrData.filter((item) => { return item['統計調查名稱'] !== "" })

                this.setState({
                    datum: notNullData,
                })
            })
    }

    render() {
        return (
            <div className="search">
                <header>
                    <h1>勞動部近10年勞動統計調查</h1>
                    <SearchBar
                        onQuery={this.handleKeyWord}
                        onSort={this.handleSort}
                        onCategory={this.handleCategory}
                    />
                </header>
                <Results
                    datum={this.state.datum}
                    keyWord={this.state.keyWord}
                    sort={this.state.sort}
                    category={this.state.category}
                />
            </div>
        )
    }
}

export default Search;