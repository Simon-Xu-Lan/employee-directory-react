import React from "react";

function SearchForm(props) {
    const col = props.column.length > 0 
        ? props.column[0].toUpperCase() + props.column.slice(1) + " Name Filter"
        :  "Please choose a column" ;

    return (
        <form>
            <div className="form-row">
                <div className="col-auto"> </div>
                <div className="col-auto">
                    <label className="mr-sm-2 sr-only" htmlFor="inlineFormCustomSelect">Preference</label>
                    <select 
                        className="custom-select mr-sm-2" 
                        id="inlineFormCustomSelect"
                        onChange={props.handleSelectChange}
                    >
                        <option selected>Choose a column</option>
                        <option value="first">First Name</option>
                        <option value="last">Last Name</option>
                    </select>
                </div>
                <div className="col-auto">
                    <input 
                        placeholder={col}
                        type="text"
                        className="form-control"
                        id="search"
                        name="search"
                        value={props.search}
                        onChange={props.handleInputChange}
                    />
                </div>
                <div className="col-auto">
                    <button 
                        type="submit"
                        className="btn btn-primary mb-2"
                        onClick={props.handleFormSubmit}
                    >Filter</button>
                </div>
            </div>
        </form>
    )
}

export default SearchForm;