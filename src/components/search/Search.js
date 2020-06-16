import React, { Component } from 'react';
import SearchBar from './SearchBar';
import Results from './Results';
import '../../scss/search.scss'

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