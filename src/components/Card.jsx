//import React from "react";
import { useState } from "react";

function Card(props) {



    // const [counter, setCounter]=React.useState(0)
    const [counter, setCounter] = useState(0)


    const cardStyle = {
        card: { width: "22rem" },
        cardTitle: { color: "red", fontSize: "55px" },
        cardBody: { color: "blue", fontSize: "22px" },
    }

    function counterHandler(event) {
        console.log(event.target.name)
        if (event.target.name === 'plus') {
            setCounter(counter + 1)
        }
        else if (event.target.name === 'minus') {
            setCounter(counter - 1)
        }
        else if (event.target.name === 'zero') {
            setCounter(0)
        }
        return (

            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="card" style={cardStyle.card}>
                            <div className="card-body">

                                <h5 className="card-title" style={cardStyle.cardTitle} >
                                    {counter}
                                </h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text" style={cardStyle.cardBody}>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="card-link">Card Link</a>
                                <a href="#" className="card-link">Anoher Link</a>
                                <button
                                    name="plus"
                                    className="card-link btn btn-primary"
                                    onClick={counterHandler}
                                >+</button>

                                <button
                                    name="zero"
                                    className="card-link btn btn-varning"
                                    onClick={counterHandler}
                                >reset</button>

                                <button
                                    name="minus"
                                    className="card-link btn btn-danger"
                                    onClick={counterHandler}
                                    disabled={counter === 0 ? true : false}
                                >-</button>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}



export default Card