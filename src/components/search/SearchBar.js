import React, { Component } from 'react';

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

export default SearchBar;