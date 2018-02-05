import React from "react";
import { render } from "react-dom";

function euler(num) {
    let sum = 0;

    for (let i = 0; i < num; i += 3) { sum += i; }
    for (let j = 5; j < num; j += 5) { sum = j % 3 === 0 ? sum : sum + j; }

    return sum;
}

function handleSubmit(e) {
    e.preventDefault();

    const answer = document.getElementById("answer");
    const val = document.getElementById("eulerVal").value;

    if (val > 100000) {
        answer.innerHTML = "Cannot exceed 100,000!";
        return;
    }

    answer.innerHTML = euler(val);
}

const App = () => (
    <div className="container">
        <h1 className="display-1">Euler</h1>
        <p className="lead">
            Find the sum of all the multiples of <mark>3 or 5</mark> below:
        </p>
        <input className="form-control" id="eulerVal" onChange={handleSubmit} placeholder="1000" />
        <br />
        <p className="lead">
            Answer:&nbsp;<kbd id="answer">?</kbd>
        </p>
    </div>
);

render(<App />, document.getElementById("root"));
