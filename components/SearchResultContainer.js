// dependencies
import React, { Component } from "react";
import SearchForm from "./SearchForm";
import API from "../utils/API";
import ResultList from "./ResultList";

class SearchResultContainer extends Component {
    state = {
        column: "",
        search: "",
        results: [],
    };

    // use componentDidMount to initialize the this.state.results
    componentDidMount() {
        this.searchEmployee();
    }

    searchEmployee = () => {
        API.search()
            .then(res => {
                const results = res.data.results;
                // remove the items which id equals null
                const cleanResult = results.filter( result => {
                    return result.id.value !== null;
                });
                this.setState({results: cleanResult});
            })
            .catch(err => console.log(err));
    }

    handleSelectChange = event => {
        const value = event.target.value;
        this.setState({
            column: value
        });
    }
    handleInputChange = e => {
        const { name, value } = e.target;
        this.setState( {
            [name]: value
        });
    };

    handleFilterSubmit = e => {
        e.preventDefault();
        const col = this.state.column;
        const text = this.state.search;
        const resultsCopy = [...this.state.results];
        // const filteredResults = resultsCopy.filter( result => result.name[col].indexOf(text) >= 0);
        console.log("52")
        this.setState( {
            search: "",
            results: []
        })
    }

    sortCol = (col ) => {
        const resultsCopy = this.state.results;
        resultsCopy.sort((a,b) => {
            if(col === "first" || col === "last") {
                return ((a.name[col] > b.name[col]) ? 1 : -1)
            } else if(col ==="dob") {
                const aYr = a.dob.date.slice(0, 4);
                const bYr = b.dob.date.slice(0, 4);
                const aMn = a.dob.date.slice(0, 4);
                const bMn = b.dob.date.slice(0, 4);
                const aDt = a.dob.date.slice(0, 4);
                const bDt = b.dob.date.slice(0, 4);
                return  (aYr > bYr) ? 1 : ((aYr === bYr) ? ((aMn > bMn) ? 1 : ((aMn === bMn) ? ((aDt > bDt) ? 1 : -1) : -1))  : -1)
            } else {
                return (a > b ? 1 : -1)
            }
        });
        this.setState({
            results: resultsCopy
        });
    }

    handleColHeadClick = (event) => {
        const col = event.target.getAttribute("data-col");
        this.sortCol(col)
    }

    render() {
        return (
            <div>
                <SearchForm 
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFilterSubmit}
                    handleSelectChange={this.handleSelectChange}
                />
                <ResultList 
                    results={this.state.results}
                    handleColHeadClick={this.handleColHeadClick}
                />
            </div>

        )
    }
}

export default SearchResultContainer;