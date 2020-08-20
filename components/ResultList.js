import React from "react";

function ResultList(props) {
    
    return (
        <table className="table table-striped">
            <thead className="thead-dark">
                <tr>
                    <th>Image</th>
                    <th scope="col">
                        <a 
                            style={{color: "white"}} 
                            onClick={props.handleColHeadClick} 
                            href="#"
                            data-col="first"
                        >First Name</a>
                    </th>
                    <th scope="col">
                        <a 
                            style={{color: "white"}} 
                            onClick={props.handleColHeadClick} 
                            href="#"
                            data-col="last"
                        >Last Name</a>
                    </th>

                    <th scope="col">
                        <a 
                            style={{color: "white"}} 
                            onClick={props.handleColHeadClick} 
                            href="#"
                            data-col="phone"
                        >Phone</a>
                    </th>
                    <th scope="col">
                        <a 
                            style={{color: "white"}} 
                            onClick={props.handleColHeadClick} 
                            href="#"
                            data-col="email"
                        >Email</a>
                    </th>
                    <th scope="col">
                        <a 
                            style={{color: "white"}} 
                            onClick={props.handleColHeadClick} 
                            href="#"
                            data-col="dob.date"
                        >DOB</a>
                    </th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(result => (
                    <tr>
                        <th scope="row"><img alt={result.name.first + " " + result.name.last} className="img-fluid" src={result.picture.medium} /></th>
                        <td>{result.name.first}</td>
                        <td>{result.name.last}</td>
                        <td>{result.phone}</td>
                        <td>{result.email}</td>
                        <td>{result.dob.date.slice(0,10)}</td>
                    </tr>
                ))}
            </tbody>
        </table>        
    )
}

export default ResultList;